import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./styles.css"; // Import your styles file

const Hero = () => {
  return (
    <div className="">
      <div className="main-img top-margin">
        <div className="text-light main-heading">
          {/* <h1 className="">
            Welcome to Ganapathy pets and Aquarium Contact us{" "}
            {/* <a
              href="https://wa.me/918838078784?text=Hii karthi I saw your website . My I know what are the products which you have "
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              <h3>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#ffffff" }}
                />
              </h3>
            </a> */}
          {/* </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
