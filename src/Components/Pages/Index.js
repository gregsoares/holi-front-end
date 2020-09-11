import React from "react";
import { TopHero } from "../TopHero/TopHero";
import { MultiSelector } from "../MultiSelector/MultiSelector";
import { DataTable } from "../DataTable/DataTable";
const Index = () => {
  return (
    <div
      classNameName="relative w-full p-0 m-0 bg-gray-400"
      data-testid="IndexPageContainer"
    >
      <TopHero />
      <MultiSelector />
      <DataTable />
    </div>
  );
};

export default Index;
