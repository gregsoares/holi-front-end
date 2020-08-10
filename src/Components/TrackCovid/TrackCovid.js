import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Loader } from "../Loader/Loader";
import { Charter } from "../Charter/Charter";
// APIs
// https://disease.sh/v3/covid-19/countries

const countryData = require("./countries.json");

// TODO: Break into smaller components
// TODO: export API functions to API file
// TODO: useContext
export const TrackCovid = () => {
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState(null);
  const [USData, setUSData] = useState([]);

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
            label: "Total US daily (thousands)",
            data: [],
            borderDash: [],
            backgroundColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
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
      chartData.data.datasets[0].data.push(day.total / 10000000);
    });
    chartData.data.labels.reverse();
    chartData.data.datasets[0].data.reverse();
    return <Line data={chartData.data} />;
  };

  useEffect(() => {
    const getUSData = async () => {
      await fetch("https://api.covidtracking.com/v1/us/daily.json")
        .then((res) => res.json())
        .then((data) => {
          const usData = data.map((day) => day);
          console.debug(
            `inside useEffect before setUSData(): \ndata: ${usData}`
          );
          setUSData(usData);
        })
        .catch((err) => console.debug(err));
    }; // END getCountries()
    getUSData();
    console.debug(``);

    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => country);
          setCountries(countries);
        })
        .catch((err) => console.debug(err));
    }; // END getCountries()
    getCountries();
    // if (countries.length === 0) setCountries(countryData);
  }, [countrySelected]);

  // const displayCountries = () => {
  //   console.debug(countries);
  //   const displayCountry = countries.map((country) => {
  //     const countryInfo = {
  //       name: country.country,
  //       value: country.countryInfo.iso2,
  //       flag: country.countryInfo.flag,
  //     };
  //     return countryInfo;
  //   });
  //   return displayCountry;
  // };

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
    console.log(`dataModel: ${dataModel[0].date}`);

    return (
      <div className="flex-inline text-xs text-center mx-2 px-2 border border-teal-500 py-3 rounded-md shadow">
        Today: (USA)
        <div className="flex">
          <div className="flex-flexcol border-teal-400 justify-between border m-1 px-2 shadow rounded-md">
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Positive</p>
              <p className="text-sm text-black">
                {toThousand(dataModel[0].positive)}
              </p>
            </div>
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Positive Increase</p>
              <p className="text-sm text-black">
                {toThousand(dataModel[0].positiveIncrease)}
              </p>
            </div>
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Recovered</p>
              <p className="text-sm text-black">
                {toThousand(dataModel[0].recovered)}
              </p>
            </div>
          </div>{" "}
          {/* END DataContaier 1 */}
          <div className="flex-flexcol border-teal-400 justify-between border m-1 px-2 shadow rounded-md">
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Negative</p>
              <p className="text-sm text-black">
                {toThousand(dataModel[0].negative)}
              </p>
            </div>
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Negative Increase</p>
              <p className="text-sm text-black">
                {toThousand(dataModel[0].negativeIncrease)}
              </p>
            </div>
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Deaths</p>
              <p className="text-sm text-black">
                {toThousand(dataModel[0].death)}
              </p>
            </div>
          </div>{" "}
          {/* END DataContaier 2 */}
          <div className="flex-flexcol border-teal-400 justify-between border m-1 px-2 shadow rounded-md">
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Total Test Results</p>
              <p className="text-sm text-black">
                {toThousand(dataModel[0].totalTestResults)}
              </p>
            </div>
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Test Results Increase</p>
              <p className="text-sm text-black">
                {toThousand(dataModel[0].totalTestResultsIncrease)}
              </p>
            </div>
            <div className="flex-flexcol  mx-auto py-2 border-t-0 border-b-0 text-center">
              <p className="font-semibold">Date:</p>
              <p className="text-sm text-black">{`${dataModel[0].date
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

  const showCountryCards = (e) => {
    let findCard = countries.map((country) =>
      country.countryInfo.iso2 === e.target.value ? (
        <div
          className="flex justify-center px-3 py-2"
          key={country.countryInfo._id}
        >
          <div className="border border-black bg-white shadow-md rounded p-3">
            <div className="flex mx-auto py-2 border-t-0 border-b-0 text-center">
              <img
                className="flex w-12 mx-2 border"
                src={country.countryInfo.flag}
                alt="Country's flag"
              />
              <p className="mx-auto flex text-xl text-center">
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
    // loadUSBarGraph();
    // console.log(`showCountryCards(): key: ${findCard[0].key} \n ${JSON.stringify(findCard)}`);
  }; //END showCountryCards()

  const handleCountrySelect = async (e) => showCountryCards(e);

  const countrySelector = () => {
    return (
      <form
        className=" text-center text-gray-700 px-2"
        data-testid="TrackCovidContainer"
      >
        <div className="border rounded border-teal-500 px-4 mb-2 py-2">
          Country List:{" "}
          <select
            className="text-xs px-2 block mx-auto py-3"
            id="DropContainer "
            name="dropContainer"
            onChange={handleCountrySelect}
          >
            {countries.length !== 0
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
              : ""}
          </select>
        </div>
        {countrySelected ? countrySelected : "No selection made"}
      </form>
    );
  }; //END countrySelector()

  return (
    <div className="">
      <div className="flex ">
        {USData.length > 0 ? showUSCard() : <Loader />}
        {USData.length > 0 ? countrySelector() : <Loader />}
      </div>
      <div className="my-3 mx-0 px-2">
        <div className="mx-auto max-w-xl">
          {USData.length > 0 ? loadUSBarGraph() : <Loader />}
        </div>
      </div>
    </div>
  );
};
