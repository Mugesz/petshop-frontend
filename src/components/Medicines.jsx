import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import medicine from "../data/medicine.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMedicine = medicine.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header />
      <h1 className="top-heading bg-light text-center">Medicine</h1>
      <form className="d-flex justify-content-center" role="search">
        <input
          className="form-control me-2 reduce-form"
          type="Search"
          placeholder="Search ..."
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <div className="container mt-0 bg-light text-center">
        <div className="row">
          {filteredMedicine.length > 0 ? (
            filteredMedicine.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={item.imageSrc}
                    className="card-img-top img-hover"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <Contact />
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center mt-3">
              <h3>No medicine found.</h3>
            </div>
          )}
        </div>
      </div>
      <ContactDetails />
      <Footer />
    </>
  );
};

const Contact = () => {
  return (
    <div className="text-center mt-3 mb-3">
      <h3>
        Contact us{" "}
        <a
          href="https://wa.me/919363290876?text=Hi, I saw your website. May I know the Medicine details?"
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

const ContactDetails = () => {
  return (
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
          <FontAwesomeIcon icon={faPhoneSquare} style={{ color: "#ffffff" }} />
        </a>
      </h3>
    </div>
  );
};

export default Medicines;
