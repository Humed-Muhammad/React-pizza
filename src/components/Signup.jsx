import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUsers } from "../redux/slices/users";
import { signUp } from "../api";

const Signup = ({ setGetSuccuss }) => {
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");
  let [email, setEmail] = useState("");
  let [error, setError] = useState({});

  const { usersData } = useSelector((state) => state.addUsers);
  console.log(usersData);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = await signUp(usersData);
    setError(err);
    setGetSuccuss(err);
  };
  console.log(error);

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-4/5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:1/5 lg:w-2/5"
      >
        <div className="w-full mb-4 flex items-center justify-center">
          <span className="mr-4 ml-4">
            <label
              className="block text-blue-400 text-sm font-bold mb-2"
              htmlFor="username"
            >
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-700 focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Firts Name"
              name="firstname"
            />
            <p className="text-red-500">{error["firstname"]}</p>
          </span>
          <span className="">
            <label
              className="block text-blue-400 text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-700 focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Last Name"
              name="lastname"
            />
            <p className="text-red-500">{error["lastname"]}</p>
          </span>
        </div>

        <div className="w-full mb-4 flex items-center justify-center">
          <span className="mr-4 ml-4">
            <label
              className="block text-blue-400 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-700 focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              name="password"
            />
            <p className="text-red-500">{error["password"]}</p>
          </span>
          <span>
            <label
              className="block text-blue-400 text-sm font-bold mb-2"
              htmlFor="confirm password"
            >
              Confirm
            </label>
            <input
              onChange={(e) => setConfirm(e.target.value)}
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-700 focus:shadow-outline"
              id="confirm"
              type="password"
              placeholder="confirm password"
              name="confirm-password"
            />
            <p className="text-red-500">{error["confirm"]}</p>
          </span>
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-400 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-700 focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            name="email"
          />
          <p className="text-red-500">{error["email"]}</p>
        </div>

        {/* <div className="mb-4">
          <label className="block text-blue-400 text-sm font-bold mb-2" htmlFor="file">
            Profile Image
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-700 focus:shadow-outline"
            id="email"
            type="file"
            placeholder="Email"
            name="userfile"
            size="20"
          />
        </div> */}

        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() =>
              dispatch(
                addUsers({
                  firstname,
                  lastname,
                  password,
                  confirm,
                  email,
                })
              )
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-700 focus:shadow-outline"
            type="submit"
          >
            Signup
          </button>
          <Link
            to="/"
            className="mt-10 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            I have an account.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
