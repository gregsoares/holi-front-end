import React, { useContext } from "react";
import { TrackCovid } from "../TrackCovid/TrackCovid";
import "../../assets/js/main";
import { CovidContext } from "../../assets/js/store/covidContext";

const Index = () => {
  const { countries, countrySelected, USData } = useContext(CovidContext);
  return (
    <div
      className="bg-gray-200 w-full p-0 m-0"
      data-testid="IndexPageContainer"
    >
      <CovidContext.Provider value={(countries, countrySelected, USData)}>
        <TrackCovid />
      </CovidContext.Provider>
    </div>
  );
};

export default Index;
