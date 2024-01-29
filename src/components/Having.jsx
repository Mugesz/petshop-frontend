import React from "react";
import bird from "../assets/img/bird@1.jpg";
import dog from "../assets/img/dog@1.jpg";
import fish from "../assets/img/fish@1.jpg";

import "./styles.css";

const Having = () => {
  return (
    <div className="container-fluid b-image">
      <div className="d-flex justify-content-around text-light">
        <div className="mt-5 mb-5">
          <img src={fish} alt="" className="having-img" />
        </div>
        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">
            Fishes starts from ₹10
          </h5>
          <p className="card-text-1">
            Dive into the world of aquatic beauty with our fish collection
            starting at just ₹10. Each pair includes a male and a female,
            offering a variety of mesmerizing species to enhance your underwater
            experience.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <img src={dog} alt="" className="having-img" />
        </div>

        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">
            Puppies starts from ₹3000
          </h5>
          <p className="card-text-1">
            Dive into the world of aquatic beauty with our fish collection
            starting at just ₹10. Each pair includes a male and a female,
            offering a variety of mesmerizing species to enhance your underwater
            experience.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <img src={bird} alt="" className="having-img" />
        </div>
        <div className="mt-5 mb-5">
          <h5 className="card-title text-center mb-3">
            Birds starts from ₹200
          </h5>
          <p className="card-text-1 mb-5">
            Soar to new heights of companionship with our feathered friends,
            starting from ₹200. From colorful parakeets to charming canaries,
            discover the joy of having a melodious companion in your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Having;
