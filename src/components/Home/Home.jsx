import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards.jsx";
import styles from "./Home.module.css";
import { get_results, post_results } from "../../api";

const Home = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let res = await get_results();
      setData(await res);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.home}>
      {data.map((item) => (
        <Cards
          key={item.id}
          title={item.title}
          date={item.created_at}
          email={item.email}
          ingredients={item.ingredients}
        />
      ))}
    </div>
  );
};

export default Home;
