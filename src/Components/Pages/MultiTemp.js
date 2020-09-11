import React from "react";

export const MultiTemp = () => {
  return (
    <div className="leading-normal tracking-wider text-gray-900 bg-gray-100">
      <nav id="header" className="fixed top-0 z-10 w-full bg-white shadow">
        <div className="container flex flex-wrap items-center justify-between w-full mx-auto my-4">
          <div className="pl-4 md:pl-0">
            <a
              className="flex items-center font-sans text-base font-extrabold text-orange-600 no-underline xl:text-xl hover:no-underline"
              href="/"
            >
              <svg
                className="inline-block h-6 mr-4 text-orange-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
              </svg>{" "}
              Multi Section Form / Scrollspy
            </a>
          </div>

          <div className="flex justify-end pr-0">
            <div className="relative flex float-right">
              <div className="relative text-sm">
                <button
                  id="userButton"
                  className="flex items-center px-4 py-2 mr-3 text-sm font-bold text-white bg-orange-700 rounded shadow hover:bg-orange-500 focus:shadow-outline focus:outline-none md:text-base"
                >
                  Menu
                  <svg
                    className="h-2 pl-2 text-white fill-current"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129 129"
                    xlinkHref="http://www.w3.org/1999/xlink"
                    enable-background="new 0 0 129 129"
                  >
                    <g>
                      <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                    </g>
                  </svg>
                </button>

                <div
                  id="userMenu"
                  className="absolute top-0 right-0 z-30 invisible min-w-full mt-12 mr-2 overflow-auto bg-white rounded shadow-md"
                >
                  <ul className="list-reset">
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 no-underline hover:bg-gray-400 hover:no-underline"
                      >
                        My account
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 no-underline hover:bg-gray-400 hover:no-underline"
                      >
                        Notifications
                      </a>
                    </li>
                    <li>
                      <hr className="mx-2 border-t border-gray-400" />
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 font-bold text-orange-600 no-underline hover:bg-orange-600 hover:text-white hover:no-underline"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!--Container--> */}
      <div className="container flex flex-wrap w-full px-2 pt-8 mx-auto mt-16 lg:pt-16">
        <div className="w-full px-6 text-xl leading-normal text-gray-800 lg:w-1/5">
          <p className="py-2 text-base font-bold text-gray-700 lg:pb-6">Menu</p>
          <div className="sticky inset-0 block lg:hidden">
            <button
              id="menu-toggle"
              className="flex justify-end w-full px-3 py-3 bg-white border border-gray-600 rounded appearance-none lg:bg-transparent hover:border-orange-600 focus:outline-none"
            >
              <svg
                className="float-right h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
          </div>
          <div
            className="sticky inset-0 z-20 hidden w-full my-2 mt-0 overflow-x-hidden overflow-y-auto bg-white border border-gray-400 shadow max-h-64 lg:h-auto lg:overflow-y-hidden lg:block lg:my-0 lg:border-transparent lg:shadow-none lg:bg-transparent"
            style={{ top: "6em" }}
            id="menu-content"
          >
            <ul className="py-2 list-reset md:py-0">
              <li className="py-1 font-bold border-l-4 border-transparent border-orange-600 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent">
                <a
                  href="#section1"
                  className="block pl-4 text-gray-700 no-underline align-middle hover:text-orange-600"
                >
                  <span className="pb-1 text-sm md:pb-0">Section 1</span>
                </a>
              </li>
              <li className="py-1 border-l-4 border-transparent md:my-2 hover:bg-orange-100 lg:hover:bg-transparent">
                <a
                  href="#section2"
                  className="block pl-4 text-gray-700 no-underline align-middle hover:text-orange-600"
                >
                  <span className="pb-1 text-sm md:pb-0">Section 2</span>
                </a>
              </li>
              <li className="py-1 border-l-4 border-transparent md:my-2 hover:bg-orange-100 lg:hover:bg-transparent">
                <a
                  href="#section3"
                  className="block pl-4 text-gray-700 no-underline align-middle hover:text-orange-600"
                >
                  <span className="pb-1 text-sm md:pb-0">Section 3</span>
                </a>
              </li>
              <li className="py-1 border-l-4 border-transparent md:my-2 hover:bg-orange-100 lg:hover:bg-transparent">
                <a
                  href="#section4"
                  className="block pl-4 text-gray-700 no-underline align-middle hover:text-orange-600"
                >
                  <span className="pb-1 text-sm md:pb-0">Section 4</span>
                </a>
              </li>

              <li className="py-1 border-l-4 border-transparent md:my-2 hover:bg-orange-100 lg:hover:bg-transparent">
                <a
                  href="#section5"
                  className="block pl-4 text-gray-700 no-underline align-middle hover:text-orange-600"
                >
                  <span className="pb-1 text-sm md:pb-0">Section 5</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!--Section container--> */}
        <section className="w-full lg:w-4/5">
          {/* <!--Title--> */}
          <h1 className="flex items-center px-2 mt-12 font-sans text-xl font-bold text-gray-700 break-normal lg:mt-0 md:text-2xl">
            Multi Section Form with Scrollspy
          </h1>

          {/* <!--divider--> */}
          <hr className="my-12 bg-gray-300" />

          {/* <!--Title--> */}
          <h2
            id="section1"
            className="px-2 pb-8 font-sans text-xl font-bold text-gray-700 break-normal"
          >
            Section 1
          </h2>

          {/* <!--Card--> */}
          <div className="p-8 mt-6 leading-normal bg-white rounded shadow lg:mt-0">
            <li>
              Using the CDN version of{" "}
              <a
                className="text-orange-600 underline"
                href="https://github.com/tailwindcss/custom-forms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind Custom Forms
              </a>
            </li>
            <li>This template uses jQuery for scrollspy</li>
          </div>
          {/* <!--/Card--> */}

          {/* <!--divider--> */}
          <hr className="my-12 bg-gray-300" />

          {/* <!--Title--> */}
          <h2 className="px-2 pb-8 font-sans text-xl font-bold text-gray-700 break-normal">
            Section 2
          </h2>

          {/* <!--Card--> */}
          <div
            id="section2"
            className="p-8 mt-6 bg-white rounded shadow lg:mt-0"
          >
            <form>
              <div className="mb-6 md:flex">
                <div className="md:w-1/3">
                  <label
                    className="block pr-4 mb-3 font-bold text-gray-600 md:text-left md:mb-0"
                    for="my-textfield"
                  >
                    Text Field
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="block w-full form-input focus:bg-white"
                    id="my-textfield"
                    type="text"
                    value=""
                  />
                  <p className="py-2 text-sm text-gray-600">
                    add notes about populating the field
                  </p>
                </div>
              </div>

              <div className="mb-6 md:flex">
                <div className="md:w-1/3">
                  <label
                    className="block pr-4 mb-3 font-bold text-gray-600 md:text-left md:mb-0"
                    for="my-select"
                  >
                    Drop down field
                  </label>
                </div>
                <div className="md:w-2/3">
                  <select
                    name=""
                    className="block w-full form-select focus:bg-white"
                    id="my-select"
                  >
                    <option value="Default">Default</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>

                  <p className="py-2 text-sm text-gray-600">
                    add notes about populating the field
                  </p>
                </div>
              </div>

              <div className="mb-6 md:flex">
                <div className="md:w-1/3">
                  <label
                    className="block pr-4 mb-3 font-bold text-gray-600 md:text-left md:mb-0"
                    for="my-textarea"
                  >
                    Text Area
                  </label>
                </div>
                <div className="md:w-2/3">
                  <textarea
                    className="block w-full form-textarea focus:bg-white"
                    id="my-textarea"
                    value=""
                    rows="8"
                  ></textarea>
                  <p className="py-2 text-sm text-gray-600">
                    add notes about populating the field
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="px-4 py-2 font-bold text-white bg-orange-700 rounded shadow hover:bg-orange-500 focus:shadow-outline focus:outline-none"
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <!--/Card--> */}

          {/* <!--divider--> */}
          <hr className="my-12 bg-gray-300" />

          {/* <!--Title--> */}
          <h2 className="px-2 pb-8 font-sans text-xl font-bold text-gray-700 break-normal">
            Section 3
          </h2>

          {/* <!--Card--> */}
          <div
            id="section3"
            className="p-8 mt-6 bg-white rounded shadow lg:mt-0"
          >
            <form>
              <div className="mb-6 md:flex">
                <div className="md:w-1/3">
                  <label
                    className="block pr-4 mb-3 font-bold text-gray-600 md:text-left md:mb-0"
                    for="my-multiselect"
                  >
                    Multi Select
                  </label>
                </div>
                <div className="md:w-2/3">
                  <select
                    className="block w-full form-multiselect"
                    multiple
                    id="my-multiselect"
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                  </select>
                  <p className="py-2 text-sm text-gray-600">
                    add notes about populating the field
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="px-4 py-2 font-bold text-white bg-orange-700 rounded shadow hover:bg-orange-500 focus:shadow-outline focus:outline-none"
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <!--/Card--> */}

          {/* <!--divider--> */}
          <hr className="my-12 bg-gray-300" />

          {/* <!--Title--> */}
          <h2 className="px-2 pb-8 font-sans text-xl font-bold text-gray-700 break-normal">
            Section 4
          </h2>

          {/* <!--Card--> */}
          <div
            id="section4"
            className="p-8 mt-6 bg-white rounded shadow lg:mt-0"
          >
            <form>
              <div className="mb-6 md:flex">
                <div className="md:w-1/3">
                  <label
                    className="block pr-4 mb-3 font-bold text-gray-600 md:text-left md:mb-0"
                    for="my-radio"
                  >
                    Radio Buttons
                  </label>
                </div>
                <div className="md:w-2/3">
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="text-indigo-600 form-radio"
                        name="radioOption"
                        value="A"
                      />
                      <span className="ml-2">Radio A</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="radioOption"
                        value="B"
                      />
                      <span className="ml-2">Radio B</span>
                    </label>
                  </div>
                  <p className="py-2 text-sm text-gray-600">
                    add notes about populating the field
                  </p>
                </div>
              </div>

              <div className="mb-6 md:flex">
                <div className="md:w-1/3">
                  <label
                    className="block pr-4 mb-3 font-bold text-gray-600 md:text-left md:mb-0"
                    for="my-checkbox"
                  >
                    Checkboxes
                  </label>
                </div>
                <div className="md:w-2/3">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="text-indigo-600 form-checkbox"
                        checked
                      />
                      <span className="ml-2">Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="text-green-500 form-checkbox"
                        checked
                      />
                      <span className="ml-2">Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="text-pink-600 form-checkbox"
                        checked
                      />
                      <span className="ml-2">Option 3</span>
                    </label>
                  </div>
                  <p className="py-2 text-sm text-gray-600">
                    add notes about populating the field
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="px-4 py-2 font-bold text-white bg-orange-700 rounded shadow hover:bg-orange-500 focus:shadow-outline focus:outline-none"
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <!--/Card--> */}

          {/* <!--divider--> */}
          <hr className="my-12 bg-gray-300" />

          {/* <!--Title--> */}
          <h2 className="px-2 pb-8 font-sans text-xl font-bold text-gray-700 break-normal">
            Section 5
          </h2>

          {/* <!--Card--> */}
          <div
            id="section5"
            className="p-8 mt-6 bg-white rounded shadow lg:mt-0"
          >
            <blockquote className="pl-8 my-4 italic border-l-4 border-orange-600 md:pl-12">
              Final confirmation disclaimer message etc
            </blockquote>

            <div className="pt-8">
              <button
                className="px-4 py-2 mr-4 font-bold text-white bg-orange-700 rounded shadow hover:bg-orange-500 focus:shadow-outline focus:outline-none"
                type="button"
              >
                Save
              </button>

              <button
                className="px-4 py-2 mr-4 font-bold text-gray-700 bg-orange-100 rounded shadow hover:bg-orange-200 focus:shadow-outline focus:outline-none"
                type="button"
              >
                Additional Action
              </button>

              <button
                className="px-4 py-2 font-bold text-gray-700 bg-orange-100 rounded shadow hover:bg-orange-200 focus:shadow-outline focus:outline-none"
                type="button"
              >
                Additional Action
              </button>
            </div>
          </div>
          {/* <!--/Card--> */}
        </section>
        {/* <!--/Section container--> */}

        {/* <!--Back link --> */}
        <div className="w-full px-4 py-24 mb-12 text-base text-gray-600 lg:w-4/5 lg:ml-auto md:text-sm">
          <span className="text-base font-bold text-orange-600">&lt;</span>{" "}
          <a
            href="/"
            className="text-base font-bold text-orange-600 no-underline md:text-sm hover:underline"
          >
            Back link
          </a>
        </div>
      </div>
      {/* <!--/container--> */}

      {/* <!-- Toggle dropdown list --> */}
    </div>
  );
};
