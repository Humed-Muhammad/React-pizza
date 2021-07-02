import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginData } from "../redux/slices/loginUser";
import { getSecurityKey } from "../redux/slices/getToken";
import { login } from "../api";

const Login = ({ setAutho }) => {
  let [type, setType] = useState(true);
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [response, setResponse] = useState({ message: "", status: "" });
  const storedJwt = localStorage.getItem("token");
  const [jwt, setJwt] = useState(storedJwt || null);

  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.loginUser);
  // const { key } = useSelector((state) => state.getToken);

  useEffect(() => {
    if (response["status"] === true) {
      localStorage.setItem("token", response["message"]["token"]);
      setAutho(response["status"]);
      setJwt(response["message"]["token"]);
    }
  }, [response]);
  // console.log(key);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { status, message } = await login(value);
    setResponse({ status, message });
    status && localStorage.setItem("logged", status);
  };
  console.log("this is response", response);
  console.log(jwt);

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center ">
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="w-96 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <p className="text-red-400">
          {typeof response["message"] === "string" && response["message"]}
        </p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email<div></div>
          </label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-700"
            id="email"
            type="text"
            placeholder="Email"
            name="email"
          />
          <p className="text-red-500">
            {response["status"] == false && response["message"]["email"]}
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>

          <input
            onChange={(event) => setPassword(event.target.value)}
            className="js-password shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-700"
            id="password"
            type={type ? "password" : "text"}
            placeholder="password"
            name="password"
          />
          <p className="text-red-500">{response["message"]["password"]}</p>

          <input
            onChange={() => setType(!type)}
            className="hidden js-password-toggle"
            id="toggle"
            type="checkbox"
          />
          <label
            className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
            htmlFor="toggle"
          >
            show
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() =>
              dispatch(
                loginData({
                  password,
                  email,
                })
              )
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <Link
          to="/signup"
          className="mt-10 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Sign up
        </Link>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Humed-Pizza. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
