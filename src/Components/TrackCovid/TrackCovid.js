import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Loader } from "../Loader/Loader";
// APIs
// https://disease.sh/v3/covid-19/countries

// TODO: Break into smaller components
// TODO: export API functions to API file
// TODO: useContext
export const TrackCovid = () => {
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState(null);
  const [USData, setUSData] = useState([]);

  // const getDailyCovid = async () =>
  //   await fetch("https://api.covidtracking.com/v1/us/daily.json")
  //     .then((res) => res.json())
  //     .catch((err) => console.debug(err));

  const getUSData = async () => {
    await fetch("https://api.covidtracking.com/v1/us/daily.json")
      .then((res) => res.json())
      .then((data) => {
        const usData = data.map((day) => day);
        setUSData(usData);
      })
      .catch((err) => console.debug(err));
  }; // END getCountries()

  const getCountries = async () => {
    // Gets all country data and displays only the country's name on the list
    // All data is saved to countries State.
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        const countries = data.map((country) => country);
        setCountries(countries);
      })
      .catch((err) => console.debug(err));
  }; // END getCountries()

  const showCountryCards = (e) => {
    let findCard = countries.map((country) =>
      country.countryInfo.iso2 === e.target.value ? (
        <div
          className="fixed flex justify-center px-3 py-2 text-gray-800"
          key={country.countryInfo._id}
        >
          <div className="p-3 bg-white border border-black rounded shadow-md">
            <div className="flex py-2 mx-auto text-center border-t-0 border-b-0">
              <img
                className="flex w-12 mx-2 border"
                src={country.countryInfo.flag}
                alt="Country's flag"
              />
              <p className="flex mx-auto text-xl text-center">
                {`${country.country} (${country.countryInfo.iso2})`}
              </p>
            </div>
            <p className="mx-2 text-xs text-gray-100">
              {/* (Updated: {country.updated}) */}
            </p>
            <p className="mx-2 my-1 leading-relaxed tracking-wide">
              Total Cases: {toThousand(country.cases)}
            </p>
            <p className="mx-2 my-1 leading-relaxed tracking-wide">
              Recovered: {toThousand(country.recovered)}
            </p>
            <p className="mx-2 my-1 leading-relaxed tracking-wide">
              Deaths: {toThousand(country.deaths)}
            </p>
            <hr className="my-2" />
            <p className="mx-2 my-1 leading-relaxed tracking-wide">
              Population: {toThousand(country.population)}
            </p>
          </div>
        </div>
      ) : null
    );
    findCard = findCard.filter((el) => el !== null);
    setCountrySelected(findCard);
  }; //END showCountryCards()

  const toThousand = (num) => {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  };

  const loadUSBarGraph = () => {
    const dataModel = [];
    dataModel.push(
      USData.map((today) => ({
        date: today.date,
        positive: today.positive,
        negative: today.negative,
        pending: today.pending,
        hospitalizedCurrently: today.hospitalizedCurrently,
        hospitalizedCumulative: today.hospitalizedCumulative,
        inIcuCurrently: today.inIcuCurrently,
        inIcuCumulative: today.inIcuCumulative,
        onVentilatorCurrently: today.onVentilatorCurrently,
        onVentilatorCumulative: today.onVentilatorCumulative,
        recovered: today.recovered,
        death: today.death,
        hospitalized: today.hospitalized,
        total: today.total,
        totalTestResults: today.totalTestResults,
        posNeg: today.posNeg,
        deathIncrease: today.deathIncrease,
        hospitalizedIncrease: today.hospitalizedIncrease,
        negativeIncrease: today.negativeIncrease,
        positiveIncrease: today.positiveIncrease,
        totalTestResultsIncrease: today.totalTestResultsIncrease,
        hash: today.hash,
      }))
    );

    // console.log(`dataModel: ${JSON.stringify(dataModel)}`);

    // TODO: load each necessary data point into it's own array, THEN load graph
    const chartData = {
      data: {
        labels: [],
        datasets: [
          {
            label: "USA: Total Confirmed (thousands)",
            data: [],
            borderDash: [],
            borderColor: "rgba(220,92,92,.7)",
            backgroundColor: "rgba(211,92,92,.3)",
            pointBackgroundColor: "rgba(220,92,92,.7)",
          },
        ],
      },
    };

    USData.forEach((day) => {
      chartData.data.labels.push(
        `${day.date.toString().substring(4, 6)}/${day.date
          .toString()
          .substring(6, 8)}`
      );
      chartData.data.datasets[0].data.push(day.positive / 1000);
    });
    chartData.data.labels.reverse();
    chartData.data.datasets[0].data.reverse();
    return <Line data={chartData.data} />;
  };

  // FIXME: reloading multiple times, might wanna implement useCallback

  const showUSCard = () => {
    const dataModel = USData.map((today) => ({
      date: today.date,
      positive: today.positive,
      negative: today.negative,
      pending: today.pending,
      hospitalizedCurrently: today.hospitalizedCurrently,
      hospitalizedCumulative: today.hospitalizedCumulative,
      inIcuCurrently: today.inIcuCurrently,
      inIcuCumulative: today.inIcuCumulative,
      onVentilatorCurrently: today.onVentilatorCurrently,
      onVentilatorCumulative: today.onVentilatorCumulative,
      recovered: today.recovered,
      death: today.death,
      hospitalized: today.hospitalized,
      total: today.total,
      totalTestResults: today.totalTestResults,
      posNeg: today.posNeg,
      deathIncrease: today.deathIncrease,
      hospitalizedIncrease: today.hospitalizedIncrease,
      negativeIncrease: today.negativeIncrease,
      positiveIncrease: today.positiveIncrease,
      totalTestResultsIncrease: today.totalTestResultsIncrease,
      hash: today.hash,
    }));

    return (
      <div className="px-2 py-3 mx-2 text-xs text-center text-gray-500 border border-teal-500 rounded-md shadow flex-inline">
        Today: (USA)
        <div className="flex">
          <div className="justify-between px-2 m-1 border border-teal-400 rounded-md shadow">
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Positive</p>
              <p className="text-sm text-gray-300">
                {toThousand(dataModel[0].positive)}
              </p>
            </div>
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Positive Increase</p>
              <p className="text-sm text-gray-300">
                {toThousand(dataModel[0].positiveIncrease)}
              </p>
            </div>
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Recovered</p>
              <p className="text-sm text-gray-300">
                {toThousand(dataModel[0].recovered)}
              </p>
            </div>
          </div>{" "}
          {/* END DataContaier 1 */}
          <div className="justify-between px-2 m-1 border border-teal-400 rounded-md shadow">
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Negative</p>
              <p className="text-sm text-gray-300">
                {toThousand(dataModel[0].negative)}
              </p>
            </div>
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Negative Increase</p>
              <p className="text-sm text-gray-300">
                {toThousand(dataModel[0].negativeIncrease)}
              </p>
            </div>
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Deaths</p>
              <p className="text-sm text-gray-300">
                {toThousand(dataModel[0].death)}
              </p>
            </div>
          </div>{" "}
          {/* END DataContaier 2 */}
          <div className="justify-between px-2 m-1 border border-teal-400 rounded-md shadow">
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Total Test Results</p>
              <p className="text-sm text-gray-300">
                {toThousand(dataModel[0].totalTestResults)}
              </p>
            </div>
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Test Results Increase</p>
              <p className="text-sm text-gray-300">
                {toThousand(dataModel[0].totalTestResultsIncrease)}
              </p>
            </div>
            <div className="py-2 mx-auto text-center border-t-0 border-b-0">
              <p className="font-semibold">Date:</p>
              <p className="text-sm text-gray-300">{`${dataModel[0].date
                .toString()
                .substring(0, 4)}/${dataModel[0].date
                .toString()
                .substring(4, 6)}/${dataModel[0].date
                .toString()
                .substring(6, 8)}`}</p>
            </div>
          </div>{" "}
          {/* END DataContaier 3 */}
        </div>{" "}
      </div>
    );
  }; // END cardData

  const handleCountrySelect = async (e) => showCountryCards(e);

  const countrySelector = () => {
    return (
      <form
        className="px-2 text-center text-gray-500"
        data-testid="TrackCovidContainer"
      >
        <div className="px-4 py-2 mb-2 border border-teal-500 rounded">
          Country List:{" "}
          <select
            className="block px-2 py-3 mx-auto text-xs text-gray-800 bg-opacity-75 border border-gray-800"
            id="DropContainer "
            name="dropContainer"
            onChange={handleCountrySelect}
          >
            {countries !== null
              ? countries.length !== 0
                ? countries.map((country) => (
                    <option
                      value={country.countryInfo.iso2}
                      key={
                        country.countryInfo._id
                          ? country.countryInfo._id
                          : Math.random()
                      }
                    >
                      {country.country} ({country.countryInfo.iso2}){" "}
                    </option>
                  ))
                : ""
              : ""}
          </select>
        </div>
        <div className="p-1 m-0">
          {countrySelected && (
            <button
              className="px-3 py-2 text-white bg-opacity-75 border border-black"
              onClick={() => setCountrySelected(null)}
            >
              Clear
            </button>
          )}
        </div>
        <div className="relative" id="countrySelectedContainer">
          {countrySelected ? countrySelected : "No selection made"}
        </div>
      </form>
    );
  }; //END countrySelector()

  useEffect(() => {
    getCountries();
    getUSData();
  }, []);
  return USData !== undefined ? (
    <div className="">
      <div className="flex ">
        {USData.length > 0 ? showUSCard() : <Loader />}
        {USData.length > 0 ? countrySelector() : <Loader />}
      </div>
      <div className="px-2 mx-0 my-3">
        <div className="max-w-xl mx-auto">
          {USData.length > 0 ? loadUSBarGraph() : <Loader />}
        </div>
      </div>
    </div>
  ) : null;
};
