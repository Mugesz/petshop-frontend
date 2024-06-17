import React from "react";
import fish from "../assets/img/fish@1.jpg";
import dog from "../assets/img/dog@1.jpg";
import bird from "../assets/img/bird@1.jpg";
import "./styles.css";

const Having = () => {
  return (
    <div className="container-fluid b-image">
      <div className="d-flex justify-content-around text-light">
        <div className="mt-5 mb-5">
          <img src={fish} alt="Fish" className="having-img" />
        </div>
        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">Fishes starts from ₹10</h5>
          <p className="card-text-1">
            Dive into the world of aquatic beauty with our fish collection. Each
            pair includes a male and a female.
          </p>
        </div>

        <div className="mt-5 mb-5">
          <img src={dog} alt="Dog" className="having-img" />
        </div>
        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">Puppies starts from ₹3000</h5>
          <p className="card-text-1">
            Wagging tails and boundless joy await with our adorable puppies.
            Find your perfect canine companion.
          </p>
        </div>

        <div className="mt-5 mb-5">
          <img src={bird} alt="Bird" className="having-img" />
        </div>
        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">Birds starts from ₹200</h5>
          <p className="card-text-1 mb-5">
            Soar to new heights of companionship with our feathered friends.
            From colorful parakeets to charming canaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Having;
