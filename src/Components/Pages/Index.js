import React from "react";
import { TrackCovid } from "../TrackCovid/TrackCovid";
import "../../assets/js/main";

const Index = () => {
  return (
    <div
      className="bg-gray-200 w-full p-0 m-0"
      data-testid="IndexPageContainer"
    >
      <TrackCovid />
    </div>
  );
};

export default Index;
