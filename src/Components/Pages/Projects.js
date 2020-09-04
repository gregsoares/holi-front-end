import React from "react";
import { TrackCovid } from "../TrackCovid/TrackCovid";
import { Charter } from "../Charter/Charter";
import { Container } from "../Container/Container";

const Projects = () => {
  return (
    <div
      className="w-full p-0 m-0 bg-gray-200"
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
    </div>
  );
};

export default Projects;
