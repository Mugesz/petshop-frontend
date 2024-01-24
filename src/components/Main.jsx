import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
    <h1 className="text-center main-header mt-3">What We Have</h1>
     <div className="container mt-0">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://creature-companions.in/wp-content/uploads/2021/11/flowerhorn-fish.gif"
                alt=""
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Fishes</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to={'/fish'} className="btn btn-primary">
                  view All fishes
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://www.dailypaws.com/thmb/rwL54b2y1kllOZLhfppcfbkrmaU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/golden-lab-puppy-664540826-2000-b29bcc58c71a498eb5ecd5d0b2b8e82b.jpg"
                alt=""
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Dogs</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to={'/dogs'} href="#" className="btn btn-primary">
                  view All Dogs
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://thumbs.dreamstime.com/b/sun-conures-4406820.jpg"
                alt=""
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Birds</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to={'/birds'} className="btn btn-primary">
                  view All Birds
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://www.dailypaws.com/thmb/rwL54b2y1kllOZLhfppcfbkrmaU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/golden-lab-puppy-664540826-2000-b29bcc58c71a498eb5ecd5d0b2b8e82b.jpg"
                alt=""
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">other pets</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to={'/pets'} className="btn btn-primary">
                  view All pets
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://www.dailypaws.com/thmb/rwL54b2y1kllOZLhfppcfbkrmaU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/golden-lab-puppy-664540826-2000-b29bcc58c71a498eb5ecd5d0b2b8e82b.jpg"
                alt=""
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Foods</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a hLink to={'/pets'} className="btn btn-primary">
                  view All Foods
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://www.dailypaws.com/thmb/rwL54b2y1kllOZLhfppcfbkrmaU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/golden-lab-puppy-664540826-2000-b29bcc58c71a498eb5ecd5d0b2b8e82b.jpg"
                alt=""
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Accessories</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a Link to={'/accessories'} className="btn btn-primary">
                  view All Accessories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
