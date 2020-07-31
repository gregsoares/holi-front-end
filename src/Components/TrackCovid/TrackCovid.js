import React, { useState, useEffect } from "react";

// APIs
// https://disease.sh/v3/covid-19/countries

// TODO: useEffect to fetch API 'onLoad'
/*======= DATA FORMAT ========
    {
        "updated": 1596199919870,
        "country": "Afghanistan",
        "countryInfo": {
            "_id": 4,
            "iso2": "AF",
            "iso3": "AFG",
            "lat": 33,
            "long": 65,
            "flag": "https://disease.sh/assets/img/flags/af.png"
        },
        "cases": 36675,
        "todayCases": 133,
        "deaths": 1272,
        "todayDeaths": 1,
        "recovered": 25509,
        "todayRecovered": 38,
        "active": 9894,
        "critical": 31,
        "casesPerOneMillion": 941,
        "deathsPerOneMillion": 33,
        "tests": 89066,
        "testsPerOneMillion": 2284,
        "population": 38992638,
        "continent": "Asia",
        "oneCasePerPeople": 1063,
        "oneDeathPerPeople": 30655,
        "oneTestPerPeople": 438,
        "activePerOneMillion": 253.74,
        "recoveredPerOneMillion": 654.2,
        "criticalPerOneMillion": 0.8
    }
*/
const countryData = require("./countries.json");

export const TrackCovid = () => {
  const [countries, setCountries] = useState([]);
  //   const getCountries = async () => {
  //     await fetch("https://disease.sh/v3/covid-19/countries")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const countries = data.map((country) => ({
  //           name: country.country,
  //           value: country.countryInfo.iso2,
  //           flag: country.countryInfo.flag,
  //         }));
  //         setCountries(countries);
  //       })
  //       .catch((err) => console.debug(err));
  //   }; // END getCountries()

  useEffect(() => {
    // getCountries();
    setCountries(countryData);
  }, []);

  const displayCountries = () => {
    console.debug(countries);
    const displayCountry = countries.map((country) => {
      const countryInfo = {
        name: country.country,
        value: country.countryInfo.iso2,
        flag: country.countryInfo.flag,
      };
      return countryInfo;
    });
    return displayCountry;
  };

  return (
    <div className="justify-between" data-testid="TrackCovidContainer">
      {countries.map((country) => (
        <div className="max-w-md">
          <div className="border bg-gray-800 mx-4 my-2  text-left">
            <div className=" flex">
              <img className="w-12" src={country.countryInfo.flag} alt="Country's flag" />
              <p className="flex mx-auto text-2xl text-center">{country.country}</p>
            </div>
            <p className="px-2 text-xs text-gray-300">
              (Updated: {country.updated})
            </p>
            <p className="">Total Cases: {country.cases}</p>
            <p className="">Recovered: {country.recovered}</p>
            <p className="">Total Cases: {country.deaths}</p>
            <hr />
            <p className="pt-2">Pupolation: {country.population}</p>
            <p className="">{country.countryInfo.iso2} </p>
          </div>
        </div>
      ))}
    </div>
  );
};
