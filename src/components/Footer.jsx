import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="text-2xl font-bold mb-4">Pet Shop</h2>
          <p>Your one-stop shop for all pet needs.</p>
        </div>
        <div className="col-md-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: info@petshop.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Main Street, Cityville</p>
        </div>
        <div className="col-md-4">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="d-flex justify-content-between">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <p>&copy; 2024 Pet Shop. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer