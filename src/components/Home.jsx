import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { home, userProfile } from "../api";
import { getPizzas } from "../redux/slices/getPizzas";
import pizza from "../images/p.jpg";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Sure from "./Sure.jsx";
import Profile from "./Profile.jsx";

const Home = () => {
  let { pizzas } = useSelector((state) => state.pizzasReducer);
  let { key } = useSelector((state) => state.getToken);
  const dispatch = useDispatch();
  const storedEmail = localStorage.getItem("useEmail");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState(storedEmail || null);
  let [deleted, setDeleted] = useState(false);
  let [pressed, setPressed] = useState(false);
  let [profile, setProfile] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      let { message, status, data } = await home();

      setUserName((await data) && data.name);
      localStorage.setItem("userEmail", (await data) && data.email);
      if (status) {
        dispatch(getPizzas(await message));
      }
      let pro = await userProfile();
      setProfile(await pro.message);
    };
    fetchData();
  }, []);

  console.log(pizzas);
  console.log(email);
  console.log(key);

  return (
    <div className="bg-gray-100 flex flex-wrap flex-col justify-center items-center md:flex-row ">
      <Navbar setPressed={setPressed} userName={userName} profile={profile} />
      {pizzas.map((item, id) => (
        <Card setDeleted={setDeleted} item={item} id={id} image={pizza} />
      ))}
      {pizzas.length !== 0 ? (
        ""
      ) : (
        <h1 className="text-xl text-gray-600 mt-20">
          There is Noting Here, Start Creating by clickin here{" "}
          <Link
            to="/add"
            className="text-2xl text-red-500 border-b-2 border-gray-300"
          >
            {" "}
            Create{" "}
          </Link>
          or Add Pizza button on the navigation bar
        </h1>
      )}
      {deleted && <Sure setDeleted={setDeleted} />}
      {pressed && <Profile />}
    </div>
  );
};

export default Home;
