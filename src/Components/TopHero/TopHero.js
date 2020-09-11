import React from "react";

export const TopHero = () => {
  return (
    <div className="relative w-full mb-8 " style={{ height: "32rem" }}>
      <img
        className="absolute top-0 left-0 w-full bg-center bg-cover "
        url="https://via.placeholder.com/640"
        alt="Page Intro background"
      ></img>
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white uppercase md:text-3xl">
            Build Your new{" "}
            <span className="text-blue-700 underline">Service</span>
          </h1>
          <button className="px-4 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Start project
          </button>
        </div>
      </div>
    </div>
  );
};
