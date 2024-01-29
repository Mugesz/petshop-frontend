import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6 text-center">
          <h1 className="heading">Ganapathy Pets and Aquarium</h1>
          <p className="para-intro text-center">
            "Welcome to Ganapathy Pets and Aquarium, where tails wag and purrs are plenty!
            Your pet's happiness begins here." 
          </p>
          <h3 className="h3-intro">
            Contact us{" "}
            <a
              href="https://wa.me/919363290876?text=Hii karthi I saw your website . My I know what are the products which you have "
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success me-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffffff" }} />
            </a>{" "}
            <a href="tel:9363290876" className="btn btn-info">
              <FontAwesomeIcon
                icon={faPhoneSquare}
                style={{ color: "#ffffff" }}
              />
            </a>
          </h3>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <img
            src="https://pets-grooming.axiomthemes.com/wp-content/uploads/2016/07/image-30.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
