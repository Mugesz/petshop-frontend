import React from "react";
import Header from "./Header";
import "./styles.css";
import Hero from "./Hero";
import Having from "./Having.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Hero />
      <Having />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
