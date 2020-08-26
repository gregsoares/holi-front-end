import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      isOpen && setIsOpen(!isOpen);
    };
    document.addEventListener("mousedown", handleClick, false);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);
  return (
    <nav
      className="flex flex-wrap items-center sticky justify-between m-0 w-full bg-gray-200 text-gray-700 hover:text-gray-900"
      id="TopNav"
      data-testid="TopNavContainer"
    >
      <div className="border rounded-lg order-none ml-4 mr-2 bg-teal-400 bg-opacity-75 hover:border-teal-300 border-teal-600 shadow hover:shadow-md hover:text-black text-xl">
        <Link id="brandNameLink" to="/">
          <p className="py-2 px-4">Just4Sho</p>
        </Link>
      </div>

      <div
        className={`
         relative flex md:hidden ml-auto mr-6 border border-teal-400  py-3 px-4 items-center rounded-full bg-teal-800 text-white opacity-75 my-2 hover:border-teal-700 hover:shadow-lg shadow-sm hover:text-2xl`}
        id="mobileMenu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block md:hidden m-0 p-0">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </span>
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed overflow-hidden mx-auto border-teal-500 rounded-lg text-center my-2 bg-teal-400 top-0 right-0 mt-16 origin-top transform transition-height duration-500 ease-out`}
          id="mobileNavLinks"
        >
          <div className="transition ease-in-out duration-300  py-5 px-12 uppercase hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75 rounded-md mx-0">
            <Link id="home" to="/">
              Home
            </Link>
          </div>

          <div className="transition ease-in-out duration-300  py-5 px-12 uppercase hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75 rounded-md mx-0">
            <Link id="projects" to="/projects">
              Projects
            </Link>
          </div>

          <div className="transition ease-in-out duration-300  py-5 px-12 uppercase hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75 rounded-md mx-0">
            <Link id="aboutme" to="/aboutme">
              About
            </Link>
          </div>
          <div className="transition ease-in-out duration-300  py-5 px-12 uppercase hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75 rounded-md mx-0">
            <Link id="linkedIn" to="">
              LinkedIn
            </Link>
          </div>

          <div className="transition ease-in-out duration-300  py-5 px-12 uppercase hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75 rounded-md mx-0">
            <Link id="github" to="">
              Github
            </Link>
          </div>

          <div className="transition ease-in-out duration-300  py-5 px-11 uppercase hover:font-semibold hover:bg-teal-600 hover:bg-opacity-75 rounded-md mx-0">
            <Link id="resume" to="/resumeDownload">
              Resume
            </Link>
          </div>
        </div>
      </div>

      <div
        className="font-semibold hidden md:flex py-2 px-4 order-1"
        id="socialLinks"
      >
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

      <div
        className="hidden md:flex py-2 px-4 font-semibold order-2"
        id="navLinks"
      >
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
