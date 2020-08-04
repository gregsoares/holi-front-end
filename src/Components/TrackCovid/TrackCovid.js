import React, { useState, useEffect } from "react";

// APIs
// https://disease.sh/v3/covid-19/countries

const countryData = require("./countries.json");

export const TrackCovid = () => {
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);
  let countrySelected = null;

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
    setCountries(countryData);
  }, [show]);

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
    (countrySelected = countries.map((country) =>
      country.countryInfo.iso2 === e.target.value ? (
        <div
          className="border-black border-1 flex-shrink-0"
          key={country.countryInfo._id}
        >
          <div className="border bg-gray-800 mx-4 my-2  text-left">
            <div className=" flex">
              <img
                className="w-12"
                src={country.countryInfo.flag}
                alt="Country's flag"
              />
              <p className="flex mx-auto text-2xl text-center">
                {country.country}
              </p>
            </div>
            <p className="px-2 text-xs text-gray-300">
              {/* (Updated: {country.updated}) */}
            </p>
            <p className="">Total Cases: {toThousand(country.cases)}</p>
            <p className="">Recovered: {toThousand(country.recovered)}</p>
            <p className="">Total Cases: {toThousand(country.deaths)}</p>
            <hr />
            <p className="pt-2">Population: {toThousand(country.population)}</p>
            <p className="">{country.countryInfo.iso2} </p>
          </div>
        </div>
      ) : (
        null
      )
    ))
  console.log(countrySelected)};

  const handleCountrySelect = async (e) => showCountryCards(e);

  return (
    <form
      className="flex flex-wrap justify-between border"
      data-testid="TrackCovidContainer"
    >
      <div className="px-4 py-2 text-center border bg-gray-200 text-gray-700">
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
      </div>
      {countrySelected ? countrySelected : "No selection made"}
    </form>
  );
};
