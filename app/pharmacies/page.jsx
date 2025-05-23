import React from "react";
import { Searchbar } from "../components/exportComp";
import CityFilter from "../components/CityFilter";
import PharmacyList from "../components/PharmacyList";

function Pharmacies() {
  return (
    <div className=" grid place-items-center pb-6">
      <div className=" inline-flex flex-col mx-auto p-4 rounded-lg   overflow-hidden ">
        <Searchbar />
        <CityFilter />
      </div>
      <PharmacyList />
    </div>
  );
}

export default Pharmacies;
