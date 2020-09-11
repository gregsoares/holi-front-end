import React from "react";

export const DataTable = () => {
  return (
    <div>
      {/* <!--Container--> */}
      <div className="container w-full px-2 mx-auto md:w-4/5 xl:w-3/5">
        {/* <!--Title--> */}
        <h1 className="flex items-center px-2 py-8 font-sans text-xl font-bold text-indigo-500 break-normal md:text-2xl">
          Responsive{" "}
          <a className="mx-2 underline" href="https://datatables.net/">
            DataTables.net
          </a>{" "}
          Table
        </h1>

        {/* <!--Card--> */}
        <div
          id="recipients"
          className="p-8 mt-6 bg-white rounded shadow lg:mt-0"
        >
          <table
            id="example"
            className="stripe hover"
            style={{
              width: "100%",
              paddingTop: "1em",
              " paddingBottom": "1em",
            }}
          >
            <thead>
              <tr>
                <th data-priority="1">Name</th>
                <th data-priority="2">Position</th>
                <th data-priority="3">Office</th>
                <th data-priority="4">Age</th>
                <th data-priority="5">Start date</th>
                <th data-priority="6">Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>

              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>

              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>

              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>

              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Nixon Tiger </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/01/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Snider Donna</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/04/22</td>
                <td>$112,000</td>
              </tr>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>

              {/* <!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)--> */}

              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!--/Card--> */}
      </div>
      {/* <!--/container--> */}
    </div>
  );
};
