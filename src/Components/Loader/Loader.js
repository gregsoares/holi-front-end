import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div>
      <div className="mx-auto my-4">
        <BounceLoader loading size={24} />
      </div>
      <div className="mx-auto my-4">
        <BarLoader loading color="white" />
      </div>
      <div className="mx-auto my-4">
        <BeatLoader loading />
      </div>
    </div>
  );
};
