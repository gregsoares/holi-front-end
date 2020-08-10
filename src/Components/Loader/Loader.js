import React from "react";
import { PulseLoader } from "react-spinners";

export const Loader = (props) => {
  return (
    <span className="inline-flex mx-auto m-0 py-3 px-4 ">
      <PulseLoader loading />
    </span>
  );
};
