import React from "react";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <nav
      className="flex sticky top-0 justify-between m-0 w-full bg-gray-200 text-gray-700 hover:text-gray-900"
      id="TopNav"
      data-testid="TopNavContainer"
    >
      <div className="ml-4 py-4 brandName">Just4Sho</div>

      <div className="flex py-2 px-4" id="socialLinks">
        <span
          className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg text-small hover:text-md hover:text-gray-900 hover:bg-white"
          id="navLink"
        >
          <Link id="github" to="/">
            LinkedIn
          </Link>
        </span>
        <span
          className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg text-small hover:text-md hover:text-gray-900 hover:bg-white"
          id="navLink"
        >
          <Link id="linkedIn" to="/">
            Github
          </Link>
        </span>
        <span
          className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg text-small hover:text-md hover:text-gray-900 hover:bg-white"
          id="navLink"
        >
          <Link id="resume" to="/">
            Resume
          </Link>
        </span>
      </div>

      <div className="flex py-2 px-4" id="navLinks">
        <span
          className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
          id="navLink"
        >
          <Link to="/">Home</Link>
        </span>
        <span
          className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
          id="navLink"
        >
          <Link to="/">Projects</Link>
        </span>
        <span
          className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
          id="navLink"
        >
          <Link to="/">AboutMe</Link>
        </span>
      </div>
    </nav>
  );
};
