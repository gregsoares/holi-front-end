import React from "react";

export const MultiSelector = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-gray-300">
        <div className="container flex items-center justify-center h-screen p-2 mx-auto md:p-0">
          <div className="grid grid-cols-1 gap-6 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="">
                <select className="p-2 border rounded">
                  <option>Round-trip</option>
                  <option>Missouri</option>
                  <option>texas</option>
                </select>
              </div>
              <div className="pt-6 md:pt-0 md:pl-6">
                <select className="p-2 border rounded">
                  <option>4 Passangers</option>
                  <option>3 Passangers</option>
                  <option>2 Passangers</option>
                </select>
              </div>
              <div className="pt-6 md:pt-0 md:pl-6">
                <select className="p-2 border rounded">
                  <option>Economy</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-2 p-2 border border-gray-200 rounded">
                <div className="flex items-center p-2 bg-gray-300 border rounded ">
                  <svg
                    className="w-5 mr-2 text-gray-800 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter text here..."
                    className="max-w-full text-gray-700 bg-gray-300 focus:outline-none"
                  />
                </div>
                <div className="flex items-center p-2 bg-gray-300 border rounded ">
                  <svg
                    className="w-5 mr-2 text-gray-800 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter text here..."
                    className="max-w-full text-gray-700 bg-gray-300 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 p-2 border border-gray-200 rounded">
                <div className="flex items-center p-2 bg-gray-300 border rounded ">
                  <svg
                    className="w-5 mr-2 text-gray-800 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter text here..."
                    className="max-w-full text-gray-700 bg-gray-300 focus:outline-none"
                  />
                </div>
                <div className="flex items-center p-2 bg-gray-300 border rounded ">
                  <svg
                    className="w-5 mr-2 text-gray-800 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter text here..."
                    className="max-w-full text-gray-700 bg-gray-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-1/4 p-2 text-white bg-gray-800 border rounded-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
