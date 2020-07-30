import React from "react";
import Index from "./Components/Pages/Index";
import { Container } from "./Components/Container/Container";
// TODO: Import router

function App() {
  return (
    <div
      className="bg-gray-200 w-full p-0 m-0 mx-auto "
      data-testid="AppContainer"
    >
      <Index />
      <Container class="bg-gray-300">
        <br />
        <br />
        <p className="text-center text-teal-800 text-lg">
          <span className="text-semibold text-xl text-teal-900 hover:text-3xl hover:mx-4">
            TODO
          </span>
          : Load Router and start building
        </p>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default App;
