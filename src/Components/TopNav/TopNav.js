import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMobileNav = () => {
    setIsOpen(true);
    document.addEventListener("mouseout", handleCloseMobileNav, false);
  };
  const handleCloseMobileNav = () => {
    setIsOpen(false);
    document.removeEventListener("mouseout", handleCloseMobileNav, false);
  };

  return (
    <nav
      className="sticky z-40 flex flex-wrap items-center justify-between w-full m-0 text-gray-700 bg-gray-200 hover:text-gray-900"
      id="TopNav"
      data-testid="TopNavContainer"
    >
      <div className="order-none ml-4 mr-2 text-xl bg-teal-400 bg-opacity-75 border border-teal-600 rounded-lg shadow hover:border-teal-300 hover:shadow-md hover:text-black">
        <Link id="brandNameLink" to="/">
          <p className="px-4 py-2">Just4Sho</p>
        </Link>
      </div>

      <div
        className={`
         relative flex md:hidden ml-auto mr-6 border border-teal-400  py-3 px-4 items-center rounded-full bg-teal-800 text-white opacity-75 my-2 hover:border-teal-700 hover:shadow-lg shadow-sm hover:text-2xl`}
        id="mobileMenu"
        onClick={() => handleOpenMobileNav()}
      >
        <span className="block p-0 m-0 md:hidden">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </span>
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed overflow-hidden mx-auto border-teal-500 rounded-lg text-center my-2 bg-teal-400 top-0 right-0 mt-16 origin-top transform transition-height duration-500 ease-out`}
          id="mobileNavLinks"
        >
          <div className="px-12 py-5 mx-0 uppercase transition duration-300 ease-in-out rounded-md hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75">
            <Link id="home" to="/">
              Home
            </Link>
          </div>

          <div className="px-12 py-5 mx-0 uppercase transition duration-300 ease-in-out rounded-md hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75">
            <Link id="projects" to="/projects">
              Projects
            </Link>
          </div>

          <div className="px-12 py-5 mx-0 uppercase transition duration-300 ease-in-out rounded-md hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75">
            <Link id="aboutme" to="/aboutme">
              About
            </Link>
          </div>
          <div className="px-12 py-5 mx-0 uppercase transition duration-300 ease-in-out rounded-md hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75">
            <Link id="linkedIn" to="">
              LinkedIn
            </Link>
          </div>

          <div className="px-12 py-5 mx-0 uppercase transition duration-300 ease-in-out rounded-md hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75">
            <Link id="github" to="">
              Github
            </Link>
          </div>

          <div className="py-5 mx-0 uppercase transition duration-300 ease-in-out rounded-md px-11 hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75">
            <Link id="resume" to="/resumeDownload">
              Resume
            </Link>
          </div>
        </div>
      </div>

      <div
        className="order-1 hidden px-4 py-2 font-semibold md:flex"
        id="socialLinks"
      >
        <span
          className="px-4 py-2 mx-1 rounded-md shadow-md hover:shadow-lg text-small hover:text-md hover:text-gray-900 hover:bg-white"
          id="navLink"
        >
          <Link id="github" to="/">
            LinkedIn
          </Link>
        </span>
        <span
          className="px-4 py-2 mx-1 rounded-md shadow-md hover:shadow-lg text-small hover:text-md hover:text-gray-900 hover:bg-white"
          id="navLink"
        >
          <Link id="linkedIn" to="/">
            Github
          </Link>
        </span>
        <span
          className="px-4 py-2 mx-1 rounded-md shadow-md hover:shadow-lg text-small hover:text-md hover:text-gray-900 hover:bg-white"
          id="navLink"
        >
          <Link id="resume" to="/">
            Resume
          </Link>
        </span>
      </div>

      <div
        className="order-2 hidden px-4 py-2 font-semibold md:flex"
        id="navLinks"
      >
        <Link to="/">
          <span
            className="px-4 py-2 mx-1 rounded-md shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
            id="navLink"
          >
            Home
          </span>
        </Link>
        <Link to="/">
          <span
            className="px-4 py-2 mx-1 rounded-md shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
            id="navLink"
          >
            Projects
          </span>
        </Link>
        <Link to="/">
          <span
            className="px-4 py-2 mx-1 rounded-md shadow-md hover:shadow-lg hover:text-gray-900 xl:hover:txt-lg hover:text-md text-small hover:bg-white"
            id="navLink"
          >
            About Me
          </span>
        </Link>
      </div>
    </nav>
  );
};
