import React, { useEffect } from "react";
import "./styles.css"; // Ensure to import your CSS file

const Testimonials = () => {
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
    <>
      <h1 className="text-center">Our Customers...</h1>
      <div className="container-fluid mb-5 test-img">
        <div className="row justify-content-left">
          {/* Testimonial 1 */}
          <div className="col-sm-12 mt-5 col-md-4 mb-5 slide-in">
            <div className="card">
              <p className="testimonial-text">
                "I recently purchased a pair of birds from Ganapathy Pets &
                Birds and they were absolutely beautiful. The birds were healthy
                and in great condition. They were also very friendly and
                interacted with us immediately. The staff at Ganapathy
                Pets&Birds was very helpful and knowledgeable. They answered all
                of our questions and gave us lots of advice on how to take care
                of our new birds."
              </p>
              <p className="testimonial-author">- Kishore Kumar</p>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="col-sm-12 mt-5 col-md-4 mb-5 slide-in">
            <div className="card">
              <p className="testimonial-text">
                "Wonderful place to get your favourite pets ❤️."
              </p>
              <p className="testimonial-author">- Nandha Kumar</p>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="col-sm-12 col-md-4 mb-5 mt-5 slide-in">
            <div className="card">
              <p className="testimonial-text">
                "Good budget to buy pets and fishes related things. Owners were friendly."
              </p>
              <p className="testimonial-author">- Gopal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
