import React from "react";
// TODO: Import and implement blogtemp.js

export const BlogTemp = () => {
  const codeBlock = `
				<code className="break-words whitespace-pre-wrap">
&lt;header className="site-header outer"&gt;
&lt;div className="inner"&gt;
{{&gt; "site-nav"}}
&lt;/div&gt;
&lt;/header&gt;
				</code>
    `;

  return (
    <div className="tracking-wide bg-grey-lightest">
      <nav
        id="header"
        className="fixed z-10 w-full bg-white border-b pin-t border-grey-light"
      >
        <div className="container flex flex-wrap items-center justify-between w-full py-4 mx-auto mt-0">
          <div className="flex items-center pl-4">
            <svg
              className="h-5 pr-3 fill-current text-purple"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
            </svg>
            <a
              className="text-xl font-extrabold text-black no-underline hover:no-underline"
              href="/"
            >
              Help Article
            </a>
          </div>
          <div className="block pr-4 lg:hidden">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded appearance-none text-grey border-grey-dark hover:text-black hover:border-purple focus:outline-none"
            >
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="z-20 flex-grow hidden w-full mt-2 lg:flex lg:content-center lg:items-center lg:w-auto lg:block lg:mt-0"
            id="nav-content"
          >
            <div className="content-center flex-1 w-full max-w-sm py-4 mx-auto lg:py-0">
              <div className="relative pl-4 pr-4 pull-right md:pr-0">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full px-2 py-1 pl-10 text-sm leading-normal transition border rounded appearance-none bg-grey-lightest text-grey-darkest focus:outline-none focus:border-purple"
                />
                <div
                  className="absolute search-icon"
                  style={{ top: "0.375rem", left: "1.75rem" }}
                >
                  <svg
                    className="w-4 h-4 pointer-events-none fill-current text-grey-darkest"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <ul className="items-center justify-end list-reset lg:flex">
              <li className="py-2 mr-3 lg:py-0">
                <a
                  className="inline-block px-4 py-2 font-bold text-black no-underline"
                  href="/"
                >
                  Active
                </a>
              </li>
              <li className="py-2 mr-3 lg:py-0">
                <a
                  className="inline-block px-4 py-2 no-underline text-grey-dark hover:text-black hover:underline"
                  href="/"
                >
                  link
                </a>
              </li>
              <li className="py-2 mr-3 lg:py-0">
                <a
                  className="inline-block px-4 py-2 no-underline text-grey-dark hover:text-black hover:underline"
                  href="/"
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!--Container--> */}
      <div className="container flex flex-wrap w-full px-2 pt-8 mx-auto mt-16 lg:pt-16">
        <div className="w-full text-xl leading-normal lg:w-1/5 lg:px-6 text-grey-darkest">
          <p className="py-2 text-base font-bold lg:pb-6 text-grey-darker">
            Menu
          </p>
          <div className="sticky block lg:hidden pin">
            <button
              id="menu-toggle"
              className="flex justify-end w-full px-3 py-3 bg-white border rounded appearance-none lg:bg-transparent border-grey-dark hover:border-purple focus:outline-none"
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
            className="sticky z-20 hidden w-full h-64 mt-0 overflow-x-hidden overflow-y-auto bg-white border shadow pin lg:h-auto lg:overflow-y-hidden lg:block border-grey-light lg:border-transparent lg:shadow-none lg:bg-transparent"
            style={{ top: "5em" }}
            id="menu-content"
          >
            <ul className="list-reset">
              <li className="py-2 md:my-0 hover:bg-purple-lightest lg:hover:bg-transparent">
                <a
                  href="/"
                  className="block pl-4 no-underline align-middle border-l-4 border-transparent text-grey-darker hover:text-purple lg:border-purple lg:hover:border-purple"
                >
                  <span className="pb-1 text-sm font-bold text-black md:pb-0">
                    Home
                  </span>
                </a>
              </li>
              <li className="py-2 md:my-0 hover:bg-purple-lightest lg:hover:bg-transparent">
                <a
                  href="/"
                  className="block pl-4 no-underline align-middle border-l-4 border-transparent text-grey-darker hover:text-purple lg:hover:border-grey-light"
                >
                  <span className="pb-1 text-sm md:pb-0">Tasks</span>
                </a>
              </li>
              <li className="py-2 md:my-0 hover:bg-purple-lightest lg:hover:bg-transparent">
                <a
                  href="/"
                  className="block pl-4 no-underline align-middle border-l-4 border-transparent text-grey-darker hover:text-purple lg:hover:border-grey-light"
                >
                  <span className="pb-1 text-sm md:pb-0">Messages</span>
                </a>
              </li>
              <li className="py-2 md:my-0 hover:bg-purple-lightest lg:hover:bg-transparent">
                <a
                  href="/"
                  className="block pl-4 no-underline align-middle border-l-4 border-transparent text-grey-darker hover:text-purple lg:hover:border-grey-light"
                >
                  <span className="pb-1 text-sm md:pb-0">Analytics</span>
                </a>
              </li>
              <li className="py-2 md:my-0 hover:bg-purple-lightest lg:hover:bg-transparent">
                <a
                  href="/"
                  className="block pl-4 no-underline align-middle border-l-4 border-transparent text-grey-darker hover:text-purple lg:hover:border-grey-light"
                >
                  <span className="pb-1 text-sm md:pb-0">Payments</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-8 mt-6 leading-normal text-black bg-white border lg:w-4/5 lg:mt-0 border-grey-light border-rounded">
          {/* <!--Title--> */}
          <div className="font-sans">
            <span className="text-base font-bold text-purple">&laquo;</span>{" "}
            <a
              href="/"
              className="text-base font-bold no-underline md:text-sm text-purple hover:underline"
            >
              Back Link
            </a>
            <h1 className="pt-6 pb-2 font-sans text-xl text-black break-normal">
              Help page title
            </h1>
            <hr className="border-b border-grey-light" />
          </div>
          {/* <!--Post Content--> */}
          {/* <!--Lead Para--> */}
          <p className="py-6">
            <span role="img" aria-label="hello emogi">
              👋
            </span>{" "}
            Welcome fellow{" "}
            <a
              className="no-underline text-purple hover:underline"
              href="https://www.tailwindcss.com"
            >
              Tailwind CSS
            </a>{" "}
            fan. This starter template provides a starting point to create your
            own helpdesk / faq / knowledgebase articles using Tailwind CSS and
            vanilla Javascript.
          </p>
          <p className="py-6">
            The basic help article layout is available and all using the default
            Tailwind CSS classes (although there are a few hardcoded style
            tags). If you are going to use this in your project, you will want
            to convert the classes into components.
          </p>
          <h1 className="py-2 font-sans">Heading 1</h1>
          <h2 className="py-2 font-sans">Heading 2</h2>
          <h3 className="py-2 font-sans">Heading 3</h3>
          <h4 className="py-2 font-sans">Heading 4</h4>
          <h5 className="py-2 font-sans">Heading 5</h5>
          <h6 className="py-2 font-sans">Heading 6</h6>
          <p className="py-6">
            Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
            purus, in mattis tortor sollicitudin pretium. Phasellus at diam
            posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
            pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
            condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
            turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
            rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
            molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
            molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
            risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
            eget sem dictum elementum.
          </p>
          <ol>
            <li className="py-3">
              Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
              libero lectus. Fusce vehicula dictum mi. In non dolor at sem
              ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam
              quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit
              amet tellus scelerisque tortor semper posuere.
            </li>
            <li className="py-3">
              Morbi varius posuere blandit. Praesent gravida bibendum neque eget
              commodo. Duis auctor ornare mauris, eu accumsan odio viverra in.
              Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut
              odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
              hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium
              nec felis.
            </li>
            <li className="py-3">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
              tristique in risus ac, tristique rutrum velit. Mauris accumsan
              tempor felis vitae gravida. Cras egestas convallis malesuada.
              Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
              suscipit, elementum odio et, consequat tellus.
            </li>
          </ol>
          <blockquote className="pl-8 my-8 italic border-l-4 border-purple md:pl-12">
            Example of blockquote - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
            amet ligula.
          </blockquote>
          <p className="py-6">Example code block:</p>
          <pre className="p-2 font-mono text-base text-white bg-black rounded md:p-4">
            {codeBlock}
          </pre>
          {/* <!--/ Post Content--> */}
          {/* <!-- Useful --> */}
          <hr className="py-4 border-b border-grey-light" />
          <div className="flex items-center">
            <svg
              className="h-16 p-4 mr-2 border rounded fill-current text-grey-dark hover:shadow hover:bg-purple-lightest hover:text-green"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
            </svg>
            <svg
              className="h-16 p-4 mr-2 border rounded fill-current text-grey-dark hover:shadow hover:bg-purple-lightest hover:text-red"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
            </svg>
            <div className="pl-4">
              <p className="font-bold text-grey-darkest">
                Did you find this article useful?
              </p>
              <p className="pt-2 text-xs text-grey-dark">
                0 out of 0 found this useful
              </p>
            </div>
          </div>
          {/* <!-- /Useful --> */}
        </div>
        {/* <!--Back link --> */}
        <div className="w-full px-4 py-6 text-base lg:w-4/5 lg:ml-auto md:text-sm text-grey">
          <span className="text-base font-bold text-purple">&lt;</span>{" "}
          <a
            href="/"
            className="text-base font-bold no-underline md:text-sm text-purple hover:underline"
          >
            Back to Help
          </a>
        </div>
      </div>
      {/* <!--/container--> */}
      <footer className="bg-white border-t shadow border-grey-light">
        <div className="container flex py-8 mx-auto">
          <div className="flex flex-wrap w-full mx-auto">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-black">About</h3>
                <p className="py-4 text-sm text-grey-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
              <div className="px-8">
                <h3 className="font-bold text-black">Social</h3>
                <ul className="items-center pt-3 text-sm list-reset">
                  <li>
                    <a
                      className="inline-block py-1 no-underline text-grey-dark hover:text-black hover:underline"
                      href="/"
                    >
                      Add social links
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
