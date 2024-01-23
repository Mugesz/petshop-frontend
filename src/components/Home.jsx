import React from "react";
import Header from "./Header";
import "./styles.css";
import Hero from "./Hero";
import Having from "./Having.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import Intro from "./Intro.jsx";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Hero />
      <Intro />
      <Having />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
