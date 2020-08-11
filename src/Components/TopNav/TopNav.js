import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const TopNav = () => {
  return (
    <nav
      className="flex flex-wrap items-center sticky transition-all ease-in duration-300 top-0 justify-between m-0 w-full bg-gray-200 text-gray-700 hover:text-gray-900"
      id="TopNav"
      data-testid="TopNavContainer"
    >
      <div className="border rounded-lg order-none ml-4 mr-2 bg-teal-200 hover:border-teal-500 border-teal-300 shadow-sm hover:shadow-md hover:text-black hover:text-2xl">
        <p className="py-2 px-4">Just4Sho</p>
      </div>

      <div
        className="flex justify-around mx-auto border border-teal-400 hidden p-3 items-center rounded-full bg-teal-800 text-white opacity-75 my-2 hover:border-teal-700 hover:shadow-lg shadow-sm hover:bg-opacity-100 hover:text-2xl"
        id="mobileMenu"
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <div className="font-semibold flex py-2 px-4 order-1" id="socialLinks">
        <span
          className="  px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg text-small hover:text-md hover:text-gray-900 hover:bg-white"
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

      <div className="flex py-2 px-4 font-semibold order-2" id="navLinks">
        <Link to="/">
          <span
            className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
            id="navLink"
          >
            Home
          </span>
        </Link>
        <Link to="/">
          <span
            className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
            id="navLink"
          >
            Projects
          </span>
        </Link>
        <Link to="/">
          <span
            className="px-4 rounded-md py-2 mx-1 shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
            id="navLink"
          >
            About Me
          </span>
        </Link>
      </div>
    </nav>
  );
};
