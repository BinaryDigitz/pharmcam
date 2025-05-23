"use client";
import React, { useState } from "react";
import { search, close } from "../assets/assets";
import Image from "next/image";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="grid place-items-center ">
      <div className="flex border border-green-900/40 rounded w-sm justify-between gap-4 shadow-green-400/20 shadow-lg">
        <label htmlFor="search" className=" p-2 rounded bg-gray-300 ">
          <Image
            src={search}
            width={30}
            className="cursor-pointer"
            alt="search icon"
          />
        </label>
        <input
          type="text"
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="text-sm placeholder:text-green-900 border-none flex-1 outline-none placeholder:italic"
          maxLength={10}
          placeholder="Search medication or pharmacy"
        />
        <button
          onClick={() => setSearchInput("")}
          title="Clear search"
          className="p-2 rounded cursor-pointer hover:bg-green-400/20"
        >
          <Image
            src={close}
            width={30}
            alt="clear search"
            className=" rounded  "
          />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
