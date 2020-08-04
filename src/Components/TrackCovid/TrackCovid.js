import React, { useState, useEffect } from "react";
import { isEmptyArray } from "formik";

// APIs
// https://disease.sh/v3/covid-19/countries

const countryData = require("./countries.json");

export const TrackCovid = () => {
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState(null)

  const toThousand = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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
    if(countries.length === 0) setCountries(countryData);
    console.log("useEffect() Executed")
  }, [countrySelected]);

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

  const showCountryCards = (e) =>{
    let findCard = countries.map((country) =>
      country.countryInfo.iso2 === e.target.value ? (
        <div
          className="flex justify-around my-1"
          key={country.countryInfo._id}
        >
          <div className="border border-1 bg-gray-800  text-left">
            <div className="mb-2 mt-4 flex">
              <img
                className="w-12 mr-2"
                src={country.countryInfo.flag}
                alt="Country's flag"
              />
              <p className="mx-auto flex text-2xl text-center">
                {`${country.country} (${country.countryInfo.iso2})`}
              </p>
            </div>
            <p className="px-2 text-xs text-gray-300">
              {/* (Updated: {country.updated}) */}
            </p>
            <p className="px-4">Total Cases: {toThousand(country.cases)}</p>
            <p className="px-4">Recovered: {toThousand(country.recovered)}</p>
            <p className="px-4">Total Cases: {toThousand(country.deaths)}</p>
            <hr className="py-2"/>
            <p className="px-4">Population: {toThousand(country.population)}</p>
          </div>
        </div>
      ) : (
       null 
      )
    )
    findCard = findCard.filter(el => el !== null)
    setCountrySelected(findCard)
  console.log(countrySelected)};

  const handleCountrySelect = async (e) => showCountryCards(e);

  return (
    <form
      className="w-full flex justify-end border"
      data-testid="TrackCovidContainer"
    >
      <div className="w-1/3 px-4 py-2 text-center border bg-indigo-400 bg-opacity-75 text-gray-700">
        Country List:{" "}
        <select
          className="text-sm pl-2 ml-4"
          id="DropContainer "
          name="dropContainer"
          onChange={handleCountrySelect}
        >
          {countries.map((country) => (
            <option
              className="hover:bg-gray-200 hover:text-md hover:border w-auto"
              value={country.countryInfo.iso2}
              key={
                country.countryInfo._id
                  ? country.countryInfo._id
                  : Math.random()
              }
            >
              {country.country} ({country.countryInfo.iso2}){" "}
            </option>
          ))}
        </select>
      {countrySelected ? countrySelected : "No selection made"}
      </div>
    </form>
  );
};
