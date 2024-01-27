import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="b-image text-light mb-0">
      <div className="container mt-0">
        <div className="row">
          <div className="col-md-4">
            <h2 className="text-2xl font-bold mb-4">Ganapathy Pet Shop</h2>
            <p>Your one-stop shop for all pet needs.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7853.92736358216!2d77.7752087336336!3d10.183604827107436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b074f5bc1015635%3A0xca91cbb4e48fee1b!2sGanapathy%20Pets%20%26%20Aquarium!5e0!3m2!1sen!2sin!4v1706341014830!5m2!1sen!2sin"
              width={350}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
            <div className="d-flex justify-content-center margin-left">
              <a
                href="https://youtube.com/@GANAPATHYPETSAQUARIUM?si=rZCw7CEcP3yzliUJ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#ffffff" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100075734816966&sfnsn=wiwspwa&mibextid=RUbZ1f"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#ffffff" }}
                />
              </a>
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
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#ffffff" }}
                />
              </a>
              <a
                href="https://wa.me/919363290876"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#ffffff" }}
                />
              </a>
              <a
                href="tel:9363290876"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
              </a>
            </div>
            <img
              src="https://pets-grooming.axiomthemes.com/wp-content/uploads/2016/07/image-18.jpg"
              alt=""
              style={{ height: "300px", width: "300px", borderRadius: " 25px" }}
            />
          </div>
        </div>
      </div>
      <div className=" text-center">
        <p>&copy; 2024 Pet Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
