import React from "react";
import { Charter } from "../Charter/Charter";
import { Container } from "../Container/Container";
import { TrackCovid } from "../TrackCovid/TrackCovid";

const Index = () => {
  return (
    <div className="text-2xl py-4 px-0 m-0 shadow-md mx-auto text-black bg-blue-600">
      <p className="text-3xl text-center">Index Page</p>

      <div className="chartContainer flex justify-between mx-auto py-4 my-4 px-6">
        <Container class="bg-gray-300 text-black text-lg my-4 py-4 mx-auto px-6">
          <Charter chartType="line" />
        </Container>

        <Container class="bg-gray-300 text-black text-lg my-4 py-4 mx-auto px-6">
          <Charter chartType="bar" />
        </Container>

        <Container class="bg-gray-300 text-black text-lg my-4 py-4 mx-auto px-6">
          <Charter chartType="doughnut" />
        </Container>
      </div>
      <TrackCovid />
    </div>
  );
};

export default Index;
