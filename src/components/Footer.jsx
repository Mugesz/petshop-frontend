import React from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";  // Import Instagram icon from brands package

const Footer = () => {
  return (
    <footer className="b-image text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="text-2xl font-bold mb-4">Ganapathy Pet Shop</h2>
            <p>Your one-stop shop for all pet needs.</p>
          </div>
          <div className="col-md-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>Email: ganapathypetsaquarium@gmail.com</p>
            <p>Phone 1: +91 93632 90876 </p>
            <p>Phone 2: +91 87605 65791</p>
            <p>
              Ganapathy Pets & Aquarium, Shop no - 1, Appukutty complex
              Batlagundu - Dindigul main road, Ayyampalayam, pirivu, Batlagundu,
              Tamil Nadu 624202
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="d-flex justify-content-between">
              <a
                href="https://www.instagram.com/ganapathy_pets_and_aquarium?utm_source=qr&igsh=ZGI0M2J4dm53Y3Y4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff" }}
                />
              </a>
              <a
                href="mailto:ganapathypetsaquarium@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FontAwesomeIcon icon={faMailBulk} style={{ color: "#ffffff" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; 2024 Pet Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;