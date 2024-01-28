import React from "react";
import { NavLink } from "react-router-dom";
import {  Link, ScrollLink, animateScroll as scroll } from "react-scroll";

const Main = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
                <NavLink to='/fish' className="btn btn-primary" onClick={scrollToTop} >
                  view All fishes
                </NavLink>
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
                <NavLink to='/dogs' className="btn btn-primary" onClick={scrollToTop}>
                  view All Dogs
                </NavLink>
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
                <NavLink to={'/birds'} className="btn btn-primary" onClick={scrollToTop}>
                  view All Birds
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1460572894071-bde5697f7197?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D"
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
                <NavLink to={'/pets'} className="btn btn-primary" onClick={scrollToTop}>
                  view All pets
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://im.whatshot.in/img/2020/Jun/istock-1173052645-cropped-1-1592388803.jpg"
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
              
              <a
                className=" dropdown-toggle btn btn-primary"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Foods
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/dogfoods" onClick={scrollToTop}>
                  Dogs foods
                </NavLink>
                <NavLink className="dropdown-item" to="/fishfoods" onClick={scrollToTop}>
                  Fish foods
                </NavLink>

                <NavLink className="dropdown-item" to="/birsfoods" onClick={scrollToTop}>
                  Birds foods
                </NavLink>
                <NavLink className="dropdown-item" onClick={scrollToTop}>
                  Medicine
                </NavLink>
              </div>
            

            
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img
                src="https://c8.alamy.com/comp/2F5YM65/pet-shop-supplies-of-dog-care-and-grooming-cartoon-vector-dog-or-puppy-animal-food-bowl-bed-and-bone-toy-leash-collar-kennel-and-carrier-cage-b-2F5YM65.jpg"
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
                
              <a
                className=" dropdown-toggle btn btn-primary"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Accessories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/dogAccessories" onClick={scrollToTop}>
                  Dogs Accessories
                </NavLink>
                <NavLink className="dropdown-item" to="/fishAccessories" onClick={scrollToTop}>
                  Fish Accessories
                </NavLink>

                <NavLink className="dropdown-item" to="/birdAccessories" onClick={scrollToTop}>
                  Birds Accessories
                </NavLink>

                <NavLink className="dropdown-item" to="/otherpetAccessories" onClick={scrollToTop}>
                  Otherpets Accessories
                </NavLink>
              </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
