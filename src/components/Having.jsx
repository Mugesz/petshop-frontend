import React from "react";
import "./styles.css";

const Having = () => {
  return (
    <div className="container-fluid b-image">
      <div className="text-secondary text-center">
        <div className="row justify-content-around">
          <div className="col-md-4 mb-5 mt-5">
            <div className="card card-having  text-light">
              <img
                src="https://img.freepik.com/free-photo/cute-fish-near-coral-reef_23-2150699415.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
                className="card-img-top  img-hover"
                alt=""
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Fishes start from ₹20- ₹500
                </h5>
                <p className="card-text">
                  We will give you a pair of fishes which contain one male and
                  one female. Types such as...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-5 mt-5">
            <div className="card card-having  text-light">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBuhSRXLVcZp3xIot-gDHUqegQSgTSa0K7Q&usqp=CAU"
                className="card-img-top img-hover"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Puppies start from ₹20- ₹500
                </h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-5 mt-5">
            <div className="card card-having text-light">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVEUin-sXmIHBXupYBTyRvLy710Dfjf60UiXE8wOAL0u0klwfUkMnNgzhGDLTTAI2zfo&usqp=CAU"
                className="card-img-top img-hover"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title text-center">
                  Birds start from ₹20- ₹500
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Having;
