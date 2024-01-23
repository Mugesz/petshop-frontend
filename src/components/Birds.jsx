import React from "react";
import Header from "./Header";
import AllBirds from "../data/birds.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Birds = () => {
  return (
    <>
      <Header />
      <div className="container-fluid bg-light top-margin">
        <div className="text-center">
          <h3>BIRDS SECTION</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {AllBirds.map((item, index) => (
            <div key={index} className="col">
              <div className="card">
                <img
                  src={item.imageSrc}
                  className="card-img-top img-hover"
                  alt="..."
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-center mt-3 mb-3">
          For more datails Contact{" "}
          <a
            href="https://wa.me/918838078784?text=Hii karthi I saw your website . My I know what are the products which you have "
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            <h2 className="text-light">
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffffff" }} />
            </h2>
          </a>{" "}
          <a href="tel:8838078784" className="btn btn-info">
            <h2>
              <FontAwesomeIcon
                icon={faPhoneSquare}
                style={{ color: "#ffffff" }}
              />
            </h2>
          </a>
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default Birds;
