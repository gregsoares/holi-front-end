import React from "react";
import { TrackCovid } from "../TrackCovid/TrackCovid";
import { Charter } from "../Charter/Charter";
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
import { LazyLoader } from "../LazyLoader/LazyLoader";
import { TopNav } from "../TopNav/TopNav";

const Projects = () => {
  return (
    <div
      className="bg-gray-200 w-full p-0 m-0"
      data-testid="ProjectsPageContainer"
    >
      <div>
        <TrackCovid />
      </div>
      <div>
        <Charter />
      </div>
      <div>
        <Container />
      </div>
      <div>
        <TopNav />
      </div>
      <div>{/* <Loader /> */}</div>
      <div>
        <LazyLoader />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div className="flex max-w-lg">
        <div className="flex mx-5 my-3">
          <Charter chartType="doughnut" />
        </div>
        <div className="flex mx-5 my-3">
          <Charter chartType="bar" />
        </div>
        <div className="flex mx-5 my-3">
          <Charter chartType="line" />
        </div>
      </div> */}

      <TrackCovid />
    </div>
  );
};

export default Projects;
