import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onePizza } from "../redux/slices/addPizza";
import { add_pizza } from "../api";
import CreateSuccuss from "./CreateSuccuss.jsx";

const Add = () => {
  let [title, setTitle] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [response, setResponse] = useState({ status: "", message: {} });
  const { data } = useSelector((state) => state.addPizzaReducer);
  const dispatch = useDispatch();
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { status, message } = await add_pizza(data);
    setResponse({ status, message });
  };
  console.log(response.status);

  return (
    <div className="relative w-96 h-screen flex flex-col justify-center items-center">
      {response.status && <CreateSuccuss />}
      <h1 className="text-2xl text-green-400 absolute top-20 border-b border-gray-400">
        Add Pizza
      </h1>
      <div className="card bg-gray-700 shadow-xl  w-96 h-96 rounded-3xl absolute  transform -rotate-6">
        <div className="card bg-green-400 shadow-lg  w-96 h-96 rounded-3xl absolute transform rotate-12">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="absolute w-96 h-96 rounded-3xl  px-6 py-4 bg-gray-100 shadow-md transform -rotate-6"
          >
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="outline-none bg-white p-2 w-full placeholder-gray-400 border-b border-gray-200 "
              type="text"
            />
            <p className="text-sm text-red-500">
              {response.status ? "" : response.message.title}
            </p>
            <input
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Ingredients"
              className="outline-none bg-white p-2 w-full placeholder-gray-400  "
              type="text"
            />
            <p className="text-sm text-red-500">
              {response.status ? "" : response.message.ingredients}
            </p>
            <button
              onClick={() =>
                dispatch(
                  onePizza({
                    title,
                    ingredients,
                  })
                )
              }
              type="submit"
              className="p-1 bg-green-400 text-white w-full mt-5"
            >
              Add
            </button>
            <Link
              to="/"
              type="submit"
              className="p-1 bg-gray-700 text-white w-full text-center"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
