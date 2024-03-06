import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details"> 
        <div>
          <h2>Cape Town</h2>
          <p>Discover the breathtaking beauty of Cape Town: where vibrant culture meets stunning landscapes, creating unforgettable memories at the tip of Africa!</p>
          <button type="button">Contact Us</button>
        </div>
        <ul>
          <li><span>Wine Tasting Tours</span></li>
          <li><span>Safari Tours</span></li>
          <li><span>Cape of Good hope Sight Seeing</span></li>
          <li><span>Hotel Booking</span></li>
          <li><span>Airpot Transportation Services</span></li>
          <li><span>Hotel pickup and drop-offs</span></li>
          <li><a href="www.http.com"><i className="fa-brands fa-facebook"></i></a></li>
        </ul>
      </div>
      <span>&copy; <strong>2024 Shelly Tours.</strong> All rights reserved, made by <strong>Nate~Mel</strong></span>
    </div>
  )
}

export default Footer;
