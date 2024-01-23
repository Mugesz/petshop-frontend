import React from 'react'
import Header from './Header'

const Accessories = () => {
  return (
    <>
    <Header />
    <div className="container-fluid bg-light">
      <div className="text-center">
        <h3>Accessories SECTION</h3>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Accessories