import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onePizza } from "../redux/slices/addPizza";
import { edit_pizza, getOnePizza } from "../api";
import { motion } from "framer-motion";

const Edit = () => {
  let [title, setTitle] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [response, setResponse] = useState({ status: "", message: {} });

  const { data } = useSelector((state) => state.addPizzaReducer);
  const dispatch = useDispatch();
  console.log(localStorage.getItem("id"));

  useEffect(() => {
    let fetchDatas = async () => {
      let data = await getOnePizza();
      setTitle(data.message.title);
      setIngredients(data.message.ingredients);
    };
    fetchDatas();
  }, []);
  console.log(title, ingredients);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { status, message } = await edit_pizza(data);
    setResponse({ status, message });
    console.log(status);
  };
  return (
    <div className="relative w-96 h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl text-yellow-400 absolute top-20 border-b-2 border-gray-400">
        Edit Pizza
      </h1>
      {response.status && (
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className=" absolute top-40 text-xl text-green-500 flex flex-col justify-center items-center"
        >
          Succussfully Edited
          <Link
            to="/"
            type="submit"
            className="p-1 rounded text-md bg-yellow-400 text-white w-full text-center"
          >
            Go to Home
          </Link>
        </motion.h1>
      )}
      <div className="card bg-yellow-400 shadow-xl  w-96 h-96 rounded-3xl absolute  transform -rotate-6">
        <div className="card bg-blue-400 shadow-lg  w-96 h-96 rounded-3xl absolute transform rotate-12">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="absolute w-96 h-96 rounded-3xl  px-6 py-4 bg-gray-100 shadow-md transform -rotate-6"
          >
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="outline-none bg-white p-2 w-full placeholder-gray-400 border-b border-gray-200 "
              type="text"
            />
            <p className="text-sm text-red-500">
              {response.status ? "" : response.message.title}
            </p>
            <input
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Ingredients"
              className="outline-none bg-white p-2 w-full placeholder-gray-400  "
              type="text"
            />
            <p className="text-sm text-red-500">
              {response.status ? "" : response.message.ingredients}
            </p>
            <button
              onClick={() => {
                dispatch(
                  onePizza({
                    title,
                    ingredients,
                  })
                );
              }}
              type="submit"
              className="p-1 bg-blue-400 text-white w-full mt-5"
            >
              Edit
            </button>
            <Link
              to="/"
              type="submit"
              className="p-1 bg-yellow-400 text-white w-full text-center"
            >
              Go to Home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
