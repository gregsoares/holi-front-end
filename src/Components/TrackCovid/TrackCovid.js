import React, { useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import { Loader } from "../Loader/Loader";
import { CovidContext } from "../../assets/js/store/covidContext";
// import { Charter } from "../Charter/Charter";
// APIs
// https://disease.sh/v3/covid-19/countries

// TODO: Break into smaller components
// TODO: export API functions to API file
// TODO: useContext
export const TrackCovid = (props) => {
  const { countries, countrySelected, USData } = props;

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
  useEffect(() => {
    console.debug(`useEffect Report:
countries: ${countries}\n
countrySelected: ${countrySelected}\n
USData: ${USData}\n
`);
  }, [countrySelected]);

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

  const handleCountrySelect = async (e) => CovidContext.showCountryCards(e);

  const countrySelector = () => {
    return (
      <form
        className="text-center text-gray-700 px-2"
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
        <div className="relative" id="countrySelectedContainer">
          {countrySelected ? countrySelected : "No selection made"}
        </div>
      </form>
    );
  }; //END countrySelector()

  // FIXME: Provider not being used ?
  return USData !== undefined ? (
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
  ) : (
    <div className="hidden"></div>
  );
};
