import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ image, item, id, setDeleted }) => {
  return (
    <div key={id} className="w-3/5 m-2 bg-white shadow-lg p-3 sm:w-72 rounded">
      <img
        className="bg-cover bg-center bg-gray-300 w-full h-40 object-cover rounded"
        src={image}
        alt="image"
      />
      <div className="mt-6">
        <p className="text-2xl text-bold tracking-wide text-gray-600 mb-2">
          {item.title}
        </p>
        <div className="text-sm text-gray-600 font-hairline">
          <p className="text-gray-600 text-lg">Ingredients</p>
          <ul className="ml-10" style={{ listStyleType: "disc" }}>
            {item.ingredients.split(",").map((value, i) => (
              <li key={i}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <Link
          onClick={() => {
            localStorage.setItem("id", item.id);
          }}
          to="/edit"
          className="rounded shadow-md flex items-center shadow px-2 py-2 text-blue-400"
        >
          Edit
        </Link>
        <button
          onClick={() => {
            localStorage.setItem("id", item.id);
            setDeleted(true);
          }}
          className="rounded shadow-md flex items-center shadow px-2 py-2 text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
