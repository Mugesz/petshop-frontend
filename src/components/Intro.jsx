import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import "./styles.css"; // Ensure to import your CSS file

const Intro = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6 text-center slide-in">
          <h1 className="heading">Ganapathy Pets and Aquarium</h1>
          <p className="para-intro text-center">
            "Welcome to Ganapathy Pets and Aquarium, where tails wag and purrs are plenty!
            Your pet's happiness begins here."
          </p>
          <h3 className="h3-intro">
            Contact us{" "}
            <a
              href="https://wa.me/919363290876?text=Hi, I saw your website. May I know what products you have?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success me-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffffff" }} />
            </a>{" "}
            <a href="tel:9363290876" className="btn btn-info">
              <FontAwesomeIcon icon={faPhoneSquare} style={{ color: "#ffffff" }} />
            </a>
          </h3>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0 slide-in">
          <img
            src="https://pets-grooming.axiomthemes.com/wp-content/uploads/2016/07/image-30.jpg"
            alt="Pets and Aquarium"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
