import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userName, setPressed, profile }) => {
  // const profile = localStorage.getItem("profileImage");

  return (
    <nav className="w-screen h-24 bg-white shadow-lg flex justify-around items-center">
      <div className="flex justify-between items-center divide-x-2 divide-green-500 ">
        <Link onClick={() => setPressed(true)}>
          <img
            src={profile ? profile[0].image : null}
            alt=""
            className="w-12 h-12 rounded-full mr-5 ml-3 cursor-pointer object-cover"
          />
        </Link>
        <h1 className="text-gray-600 text-2xl pl-5">
          {userName && userName.charAt(0).toUpperCase() + userName.slice(1)}
        </h1>
      </div>
      <form
        onSubmit={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("logged");
          localStorage.removeItem("userEmail");
          localStorage.removeItem("id");
        }}
      >
        <button
          type="submit"
          className="invisible rounded shadow-md flex items-center shadow px-2 py-2 bg-gray-600 hover:bg-gray-700 text-white sm:visible"
        >
          Logout
        </button>
      </form>
      <Link
        to="/add"
        className="invisible rounded shadow-md flex items-center shadow px-2 py-2 bg-green-400 hover:bg-green-500 text-white sm:visible"
      >
        Add Pizza
      </Link>
    </nav>
  );
};

export default Navbar;
