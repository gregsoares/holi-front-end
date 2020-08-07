import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
// APIs
// https://disease.sh/v3/covid-19/countries

// const countryData = require("./countries.json");

export const TrackCovid = () => {
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState(null);
  const [USData, setUSData] = useState([]);

  const toThousand = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const loadUSBarGraph = () => {
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

    // TODO: load each necessary data point into it's own array, THEN load graph
    // {(USData.length !== 0 ? (<Bar
    // data={ {
    //   labels: [(JSON.stringify(USData[0].date)).slice(6,8)],
    //   datasets: [{
    //     label: 'Positive (daily)',
    //     data: USData[0].positive }]
    //   }}
    //   />) : "")}

    // return dataModel;
  };

  useEffect(() => {
    const getUSData = async () => {
      await fetch("https://api.covidtracking.com/v1/us/daily.json")
        .then((res) => res.json())
        .then((data) => {
          const usData = data.map((stateData) => stateData);
          setUSData(usData);
        })
        .catch((err) => console.debug(err));
    }; // END getCountries()
    getUSData();

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
    // if(countries.length === 0) setCountries(countryData);
    console.debug("useEffect() Executed");
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

  const showCountryCards = (e) => {
    let findCard = countries.map((country) =>
      country.countryInfo.iso2 === e.target.value ? (
        <div
          className="flex justify-around my-1 "
          key={country.countryInfo._id}
        >
          <div className="border border-1 bg-gray-800 text-left">
            <div className="mb-2 mt-4 flex">
              <img
                className="w-12 mx-4 border"
                src={country.countryInfo.flag}
                alt="Country's flag"
              />
              <p className="mx-auto flex text-2xl text-center">
                {`${country.country} (${country.countryInfo.iso2})`}
              </p>
            </div>
            <p className="mx-2 text-xs text-gray-300">
              {/* (Updated: {country.updated}) */}
            </p>
            <p className="mx-4">Total Cases: {toThousand(country.cases)}</p>
            <p className="mx-4">Recovered: {toThousand(country.recovered)}</p>
            <p className="mx-4">Deaths: {toThousand(country.deaths)}</p>
            <hr className="my-2" />
            <p className="mx-4">Population: {toThousand(country.population)}</p>
          </div>
        </div>
      ) : null
    );
    findCard = findCard.filter((el) => el !== null);
    setCountrySelected(findCard);
    loadUSBarGraph();
    console.log(`key: ${findCard[0].key} \n ${JSON.stringify(findCard)}`);
  };

  const handleCountrySelect = async (e) => showCountryCards(e);

  return (
    <div className="text-2xl py-4 px-0 m-0 shadow-md mx-auto text-black bg-blue-600">
      <p className="text-3xl text-center">Live Covid Tracker</p>

      <form className="flex" data-testid="TrackCovidContainer">
        <div className="py-2 text-center bg-indigo-400 bg-opacity-75 text-gray-700">
          Country List:{" "}
          <select
            className="text-sm pl-2 ml-4 block mx-4 py-3"
            id="DropContainer "
            name="dropContainer"
            onChange={handleCountrySelect}
          >
            {countries.length !== 0
              ? countries.map((country) => (
                  <option
                    className=""
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
          {countrySelected ? countrySelected : "No selection made"}
        </div>
      </form>
      {/* TODO: Make use of US data and load it onto Bar chart */}
      {/* TODO: Load overall data in superimposed linechart  */}
      {/* w-xsmall, diff colors between bar <> line  */}
      <div className="flex max-w-2xl p-0 mx-2" id="BarChartContainer">
        {USData.length !== 0 ? (
          <Bar
            data={{
              labels: [JSON.stringify(USData[0].date).slice(6, 8)],
              datasets: [
                {
                  label: "Positive (daily)",
                  data: USData[0].positive,
                },
              ],
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
