import React from 'react'

export const Topnav = () => {
  return (
    <div>
      <nav className="bg-gray-800" id="Topnav">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8"
                  src="/img/logos/workflow-mark-on-dark.svg"
                  alt="Workflow logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10">
                  <a
                    href="/"
                    className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                  >Dashboard
                    </a>
                  <a
                    href="/"
                    className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Team
                    </a>
                  <a
                    href="/"
                    className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Projects
                    </a>
                  <a
                    href="/"
                    className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Calendar
                    </a>
                  <a
                    href="/"
                    className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Reports
                    </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-4 md:ml-6">
                <button
                  className="p-1 text-gray-400 border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-label="Notifications"
                >
                  <svg
                    className="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                {/* <!-- Profile dropdown --> */}
                <div className="relative ml-3">
                  <div>
                    <button
                      className="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                    >
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
                    <div
                    className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                  >
                    <div
                      className="py-1 bg-white rounded-md shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >Your Profile
                        </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >Settings
                        </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >Sign out
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!--
      Mobile menu, toggle classNamees based on menu state.

      Open: "block", closed: "hidden"
    --> */}
          <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
            >Dashboard
              </a>
            <a
              href="/"
              className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Team
              </a>
            <a
              href="/"
              className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Projects
              </a>
            <a
              href="/"
              className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Calendar
              </a>
            <a
              href="/"
              className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Reports
              </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  Tom Cook
                  </div>
                <div
                  className="mt-1 text-sm font-medium leading-none text-gray-400"
                >
                  tom@example.com
                  </div>
              </div>
            </div>
            <div className="px-2 mt-3">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Your Profile
                </a>
              <a
                href="/"
                className="block px-3 py-2 mt-1 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Settings
                </a>
              <a
                href="/"
                className="block px-3 py-2 mt-1 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Sign out
                </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}
