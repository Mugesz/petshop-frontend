import React from "react";
import bird from "../assets/img/bird@1.jpg";
import dog from "../assets/img/dog@1.jpg"
import fish from "../assets/img/fish@1.jpg"

import "./styles.css";

const Having = () => {
  return (
    <div className="container-fluid b-image">
      <div className="d-flex justify-content-around text-light">
        <div className="mt-5 mb-5">
          <img src={fish} alt="" className="having-img" />
        </div>
        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">Fishes starts from ₹10</h5>
          <p className="card-text-1">
            We will give you a pair of fishes which contain one male and one
            female. Types such as...
          </p>
        </div>
        <div className="mt-5 mb-5">
          <img src={dog} alt="" className="having-img"/>
        </div>

        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">Puppies starts from ₹3000</h5>
          <p className="card-text-1">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <img src={bird} alt="" className="having-img"/>
        </div>
        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">Birds starts from ₹200</h5>
          <p className="card-text-1 mb-5">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Having;
