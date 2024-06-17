import React from "react";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

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
                  Discover a world of aquatic wonders with our exquisite
                  collection of fishes. From vibrant tropical species to
                  graceful underwater companions, find the perfect finned friend
                  for your aquarium.
                </p>
                <NavLink
                  to="/fish"
                  className="btn btn-primary"
                  onClick={scrollToTop}
                >
                  View All Fishes
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
                  Unconditional love meets boundless energy. Our delightful dogs
                  are not just pets; they're loyal companions, ready to share
                  joy, laughter, and countless unforgettable moments with you.
                </p>
                <NavLink
                  to="/dogs"
                  className="btn btn-primary"
                  onClick={scrollToTop}
                >
                  View All Dogs
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
                  Soar into the enchanting realm of birds. From colorful parrots
                  to melodious canaries, our feathered friends bring song and
                  vibrancy to your life. Explore our avian assortment and let
                  your spirits take flight.
                </p>
                <NavLink
                  to={"/birds"}
                  className="btn btn-primary"
                  onClick={scrollToTop}
                >
                  View All Birds
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
                <h5 className="card-title text-center">Other Pets</h5>
                <p className="card-text">
                  Beyond the ordinary, our collection of unique pets awaits your
                  affection. Whether it's a small mammal, reptile, or any other
                  delightful creature, discover the extraordinary joy of having
                  a non-traditional companion.
                </p>
                <NavLink
                  to={"/pets"}
                  className="btn btn-primary"
                  onClick={scrollToTop}
                >
                  View All Pets
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
                  Treat your pets to a feast of flavors! Explore our range of
                  high-quality foods, specially crafted to meet the nutritional
                  needs of your beloved companions. From dog kibbles to fish
                  flakes, we have a delectable menu for every palate.
                </p>

                <a
                  className=" dropdown-toggle btn btn-primary"
                  id="navbarDropdownFoods"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Foods
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownFoods"
                >
                  <NavLink
                    className="dropdown-item"
                    to="/dogfoods"
                    onClick={scrollToTop}
                  >
                    Dogs Foods
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/fishfoods"
                    onClick={scrollToTop}
                  >
                    Fish Foods
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/birdfoods"
                    onClick={scrollToTop}
                  >
                    Birds Foods
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
                  Elevate your pet's lifestyle with our curated selection of
                  accessories. From cozy beds to stylish leashes, our collection
                  ensures that your pets live in comfort and style. Explore our
                  accessories to enhance the bond with your furry, feathery, or
                  scaly friends.
                </p>

                <a
                  className=" dropdown-toggle btn btn-primary"
                  id="navbarDropdownAccessories"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accessories
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownAccessories"
                >
                  <NavLink
                    className="dropdown-item"
                    to="/dogAccessories"
                    onClick={scrollToTop}
                  >
                    Dogs Accessories
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/fishAccessories"
                    onClick={scrollToTop}
                  >
                    Fish Accessories
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/birdAccessories"
                    onClick={scrollToTop}
                  >
                    Birds Accessories
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/otherpetAccessories"
                    onClick={scrollToTop}
                  >
                    Other Pets Accessories
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
