import React from "react";
import { TrackCovid } from "../TrackCovid/TrackCovid";
import "../../assets/js/main";

const Index = () => {
  return (
    <div
      className="relative z-30 w-full p-0 m-0 bg-gray-400"
      data-testid="IndexPageContainer"
    >
      <div className="min-h-screen py-2 bg-black bg-opacity-75 cover-fill absolute-center">
        <TrackCovid />
      </div>
    </div>
  );
};

export default Index;
