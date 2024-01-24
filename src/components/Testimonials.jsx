import React from "react";

const Testimonials = () => {
  return (
    <>
      <h1 className="text-center">Our Customers...</h1>
      <div className="container-fluid mb-5 test-img">
        <div className="row justify-content-left">
          {/* Testimonial 1 */}
          <div className="col-sm-12 mt-5 col-md-3 mb-5">
            <div className="card">
              <p className="testimonial-text">
                "I recently purchased a pair of birds from Ganapathy Pets &
                Birds and they were absolutely beautiful. The birds were healthy
                and in great condition. They were also very friendly and
                interacted with us immediately. The staff at Ganapathy
                Pets&Birds was very helpful and knowledgeable. They answered all
                of our questions and gave us lots of advice on how to take care
                of our new birds. "
              </p>
              <p className="testimonial-author">- Kishore Kumar</p>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="col-sm-12 mt-5  col-md-3 mb-5">
            <div className="card">
              <p className="testimonial-text">
                "Wonderful place to get your favourite pets ❤️."
              </p>
              <p className="testimonial-author">- nandha kumar</p>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="col-sm-12 col-md-3 mb-5 mt-5 ">
            <div className="card">
              <p className="testimonial-text">
                "Vestibulum vitae ullamcorper ligula. Ut quis mauris accumsan,
                lobortis odio at, fermentum sapien. Integer volutpat sapien nec
                justo scelerisque."
              </p>
              <p className="testimonial-author">- Michael Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
