import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
  const navigate = useNavigate()

  const goToContacts = () => {
    navigate('/contact')
  };

  return (
    <div className="footer">
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9201333269866!2d18.493656299999998!3d-33.891710700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c237072a95b%3A0xde9653e2b4786d07!2s290%20Koeberg%20Rd%2C%20Tijgerhof%2C%20Cape%20Town%2C%207441!5e0!3m2!1sen!2sza!4v1710740800185!5m2!1sen!2sza"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="footer-details"> 
        <div>
          <h2>Cape Town</h2>
          <p>Discover the breathtaking beauty of Cape Town: where vibrant culture meets stunning landscapes, creating unforgettable memories at the tip of Africa!</p>
          <p>Email shellytours@gmail.co.za</p>
          <button onClick={goToContacts} type="button">Contact Us</button>
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
