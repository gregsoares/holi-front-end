import React, { useState, createContext } from "react";

export const CovidContext = createContext(
  async () =>
    await fetch("https://api.covidtracking.com/v1/us/daily.json")
      .then((res) => res.json())
      .then((data) => {
        const usData = data.map((day) => day);
        // console.debug(
        //   `inside useEffect before setUSData(): \ndata: ${usData}`
        // );
      })
      .catch((err) => console.debug(err))
);

export default ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState(null);
  const [USData, setUSData] = useState([]);

  const toThousand = (num) => {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  };

  const getUSData = async () => {
    await fetch("https://api.covidtracking.com/v1/us/daily.json")
      .then((res) => res.json())
      .then((data) => {
        const usData = data.map((day) => day);
        // console.debug(
        //   `inside useEffect before setUSData(): \ndata: ${usData}`
        // );
        setUSData(usData);
      })
      .catch((err) => console.debug(err));
  }; // END getCountries()

  getUSData().then(() =>
    console.debug(`getUSData() done in covidContext at ${new Date()}`)
  );

  const getCountries = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        const countries = data.map((country) => country);
        setCountries(countries);
      })
      .catch((err) => console.debug(err));
  }; // END getCountries()
  getCountries().then(() =>
    console.debug(`getCountries() done in covidContext at ${new Date()}`)
  );

  const showCountryCards = (e) => {
    let findCard = countries.map((country) =>
      country.countryInfo.iso2 === e.target.value ? (
        <div
          className="flex fixed justify-center px-3 py-2"
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

  const store = {
    countries: [countries, setCountries],
    countrySelected: [countrySelected, setCountrySelected],
    USData: [USData, setUSData],
  };
  return (
    <CovidContext.Provider value={store}>{children}</CovidContext.Provider>
  );
};
