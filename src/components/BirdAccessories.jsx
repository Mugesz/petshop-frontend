import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import birdAccessories from "../data/birdAccessories.json";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

const BirdAccessories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAccessories = birdAccessories.filter((accessory) =>
    accessory.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header />
      <h1 className="top-heading bg-light">Bird Accessories</h1>
      <form className="d-flex justify-content-center" role="search">
        <input
          className="form-control me-2 reduce-form"
          type="Search"
          placeholder="Search Bird Accessories Name Here ..."
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <div className="container mt-0 bg-light">
        <div className="row">
          {filteredAccessories.length > 0 ? (
            filteredAccessories.map((item, index) => (
              <BirdAccessoryCard key={index} item={item} />
            ))
          ) : (
            <div className="col-12 text-center mt-3">
              <h3>No accessories found.</h3>
            </div>
          )}
          {/* Add two empty columns to create larger spaces */}
          <div className="col" />
          <div className="col" />
        </div>
      </div>
      <div className="text-center mt-3 mb-3">
        <h3>
          For more details Contact{" "}
          <a
            href="https://wa.me/919363290876?text=Hi, I saw your website. May I know what products you have?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
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
      <Footer />
    </>
  );
};

const BirdAccessoryCard = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`col-md-4 mb-4 ${inView ? "slide-up" : "hidden"}`}
    >
      <div className="card">
        <img
          src={item.imageSrc}
          className="card-img-top img-hover"
          alt={item.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{item.title}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="text-center mt-3 mb-3">
      <h3>
        Contact us{" "}
        <a
          href="https://wa.me/919363290876?text=Hi,karthi I saw your website. May I know the Bird Accessories details?"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success"
        >
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffffff" }} />
        </a>{" "}
        <a href="tel:9363290876" className="btn btn-info">
          <FontAwesomeIcon icon={faPhoneSquare} style={{ color: "#ffffff" }} />
        </a>
      </h3>
    </div>
  );
};

export default BirdAccessories;
