"use client";
import React, { useState } from "react";

function User() {
  const [isLoggedin, setLoggedin] = useState(true);
  return (
    <div className="hidden md:block ">
      {isLoggedin ? (
        <div className="flex items-center gap-4">
          <div
            title="User profile"
            className="group relative cursor-pointer "
          >
            <p className=" size-8 lg:size-10 rounded-full grid place-items-center bg-black text-white">M</p>
            <div className="w-30 p-2 hidden absolute rounded shadow text-sm group-hover:flex top-10 flex-col gap-1.5">
                <p title=" Profile"
                 className="text-gray-500 hover:bg-gray-50 rounded">Profile</p>
                <p title="Verify account"
                className="text-gray-500 hover:bg-gray-50 rounded">Verify account</p>
                <p title="Log out"
                className="text-red-500 hover:bg-gray-50 rounded">Log out</p>

            </div>
          </div>
          <button
            title="Log out"
            className=" md:hidden border border-gray-500 rounded px-4 py-2 text-sm shadow md:hover:scale-x-105 trans cursor-pointer"
          >
            Log out
          </button>
        </div>
      ) : (
        <button
          title="Login page"
          className="text-sm bg-black md:hover:scale-x-105 text-white px-4 py-2 rounded shadow cursor-pointer "
        >
          Login / Create acount
        </button>
      )}
    </div>
  );
}

export default User;
