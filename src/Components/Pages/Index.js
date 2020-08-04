import React from "react";
import { Charter } from "../Charter/Charter";
import { Container } from "../Container/Container";
import { TrackCovid } from "../TrackCovid/TrackCovid";

const Index = () => {
  return (
    <div className="text-2xl py-4 px-0 m-0 shadow-md mx-auto text-black bg-blue-600">
      <p className="text-3xl text-center">Index Page</p>

      <div className="chartContainer flex justify-between mx-uto py-4 my-4">
        <Container class="bg-gray-300 my-1 mx-auto px-6">
          <Charter chartType="line" />
        </Container>

        <Container class="bg-gray-300 my-1 mx-auto px-6">
          <Charter chartType="bar" />
        </Container>

        <Container class="bg-gray-300 my-1 mx-auto px-6">
          <Charter chartType="doughnut" />
        </Container>
      </div>
      <div className="w-full h-full border-white border-2 flex">
        <div className="w-auto-flex w-full md:w-2/3">
          <p id="mapTitle" className="text-xl">
            Map title
          </p>
        </div>
        <div className="flex w-full md:w-1/3">
          <div className="w-full border-2">
            <p className="text-lg text-center text-black" id="R1Title">
              R1Title
            </p>
            <Container>
              <div className="flex p-1 text-center justify-around">
                <div className="border-gray-600">
                  <p className="border-gray-500 text-gray-700 inline w-auto text-md border  px-2 py-2">
                    one
                  </p>

                  <p className="border-gray-500 text-gray-700 inline w-auto text-md border  px-2 py-2">
                    two
                  </p>

                  <p className="border-gray-500 text-gray-700 inline w-auto text-md border  px-2 py-2">
                    three
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <TrackCovid />
    </div>
  );
};

export default Index;
