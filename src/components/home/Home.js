import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header";
import Courses from "../couses/Courses";
import { useState } from "react";
import Footer from "../footer/Footer";

const Home = () => {
  const [carts, setCarts] = useState([]);
  const addCart = (newCart) => {
    setCarts([...carts, newCart]);
    console.log(carts);
  };
  return (
    <div className="home">
      <header>
        <Header addCart={carts}></Header>
      </header>
      <main>
        <Courses addCart={addCart}></Courses>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
