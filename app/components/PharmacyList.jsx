"use client";
import React, { useEffect, useState } from "react";
import { pharmacies } from "../assets/assets";

function PharmacyList() {
  const [selectedPharmacies, setSelectedPharmacies] = useState([]);
  const [pharmacyState, setPharmacyState] = useState("all");

  function handleOpenPharmacies(state) {
    setPharmacyState("open");
    const openPharmacies = pharmacies.filter((pharmacy) => pharmacy.isOpen);
    console.log(openPharmacies);

    setSelectedPharmacies(openPharmacies);
  }
  function handleAllPharmacies(state) {
    setPharmacyState("all");
    setSelectedPharmacies(pharmacies);
  }
  useEffect(() => {
    setSelectedPharmacies(pharmacies);
  }, []);
  return (
    <div className="mt-4 p-4 rounded  bg-white/10">
      {/* <h1 className="mano heading3 text-center mt-4 lg:mt-4 overflow-y-scroll">
        Pharmacies in Bamenda
      </h1> */}
      <div className="text-sm flex gap-4 mx-auto justify-center items-center">
        <button
          title="View all pharmacies"
          onClick={() => handleAllPharmacies("all")}
          className={`py-2 px-4 rounded  ${
            pharmacyState === "all"
              ? "bg-green-900 text-green-100"
              : "bg-black/50 text-gray-300"
          }  cursor-pointer  hover:scale-x-105 trans`}
        >
          All pharmacies
        </button>
        <button
          title="View open pharmacies"
          onClick={() => handleOpenPharmacies("open")}
          className={`py-2 px-4 rounded  ${
            pharmacyState === "open"
              ? "bg-green-900 text-green-100"
              : "bg-black/50 text-gray-300"
          }  cursor-pointer hover:scale-x-105 trans`}
        >
          Currently open
        </button>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 overflow-y-scroll gap-2 mt-4">
        {selectedPharmacies &&
          selectedPharmacies.map((pharmacy) => (
            <article className={`p-4 rounded-xl w-sm md:w-lg  ${pharmacy.onCall ? 'bg-green-300/50' : 'bg-white/50'}`}>
              <div className="flex items-center gap-4 cursor-pointer">
                <div>
                  {pharmacy.isOpen ? (
                    <p
                      className="size-2 bg-green-400 rounded-full"
                      aria-label="pharmacy is open"
                    ></p>
                  ) : (
                    <p
                      className="size-2 bg-gray-600 rounded-full"
                      aria-label="pharmacy is closed"
                    ></p>
                  )}
                </div>
                <p
                  className={`${
                    pharmacy.isOpen ? "font-bold" : "opacity-80"
                  } flex-1`}
                >
                  {pharmacy.name}
                </p>
                <div>
                  {pharmacy.isOpen ? (
                    <div className="text-xs italic text-green-600">
                      <p>Currently open</p>
                      <p className="text-gray-600">
                        {pharmacy.onCall ? (
                          <p className="text-green-700">On call today</p>
                        ) : (
                          <p>
                            <span>Closes at </span>
                            <span className="text-red-600"> 18:30</span>
                          </p>
                        )}
                       
                      </p>
                    </div>
                  ) : (
                    <div className="text-xs italic text-gray-600">
                      <p>Currently closed</p>
                      <p className="text-gray-600">
                        <span>Opens at </span>
                        <span className="text-gray-600"> 18:30</span>
                      </p>
                    </div>
                  )}
                </div>
                <div>{/* <p>Oncall today</p> */}</div>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}

export default PharmacyList;
