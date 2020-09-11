import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

export const TopNav = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpenMobileNav = () => {
  //   setIsOpen(true);
  //   document.addEventListener("mouseout", handleCloseMobileNav, false);
  // };
  // const handleCloseMobileNav = () => {
  //   setIsOpen(false);
  //   document.removeEventListener("mouseout", handleCloseMobileNav, false);
  // };

  return (
    <nav className="bg-white shadow">
      <div className="container px-6 py-3 mx-auto ">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <a
                href="/"
                className="text-xl font-bold text-gray-800 hover:text-gray-700 md:text-2xl"
              >
                Brand
              </a>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className="hidden -mx-4 md:flex md:items-center">
            <a
              href="/"
              className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600"
            >
              Web developers
            </a>
            <a
              href="/"
              className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600"
            >
              Web Designers
            </a>
            <a
              href="/"
              className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600"
            >
              UI/UX Designers
            </a>
            <a
              href="/"
              className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
