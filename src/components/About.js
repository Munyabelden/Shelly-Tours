import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import about from './assets/receptionist-calling-bellboy-help.jpg';
import './styles/About.css'

const About = () => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate('/services')
  };
  return (
    <div>
      <div className="header-home about">
        <div className="header-p">
          <h1>About Us</h1>
          <p>Specializing in airport transfer and tourism services, including hotel bookings. We aim to provide exceptional customer service and reliable transportation solutions for Luxury Vacationers, Frequent Business travelers, and Family Vacationers. Our distribution channels include both online platforms and a physical location, ensuring convenience and accessibility for our diverse customer segments. With a team of 50 dedicated employees, we are committed to delivering unforgettable experiences and creating lasting memories for our customers.</p>
          <button onClick={goToServices} className="learn-more">Learn more about our tours {'>'} </button>
       </div>
        <div>
          
        </div>
      </div>
      <section className="about-main">
        <div className="values-section m-4 p-4">
          <h2>Our Values</h2>
          <div className="values">
            <div className="value">
              <h3>Exceptional Service</h3>
              <p>Elevate your travels with our dedicated team, ensuring personalized and professional service for Luxury Vacationers, Frequent Business travelers, and Family Vacationers alike.</p>
            </div>
            <div className="value">
              <h3>Reliable Transport:</h3>
              <p>Trust our punctual and comfortable transportation solutions, providing safety and convenience for your journey, whether you're on a luxury vacation, frequent business trip, or family getaway.</p>
            </div>
            <div className="value">
              <h3>Create Memories:</h3>
              <p>Curate unforgettable experiences with our passionate team, offering exclusive hotel bookings and tailored tourism services for lasting memories with every trip.</p>
            </div>
          </div>
        </div>
        <div className="who-we-are">
          <div className="p-8">
            <h2>Who We Are</h2>
            <p>Shelly Tours operates in the thriving airport transfer and tourism industry in Cape Town, South Africa. As an upcoming unlaunched business, we are poised to make a significant impact by providing efficient and reliable services to luxury vacationers in the region. Our distribution channels include both online platforms and a physical location, ensuring convenience and accessibility for our customers. The tourism industry in Cape Town is a key driver of economic growth, attracting millions of visitors each year. With its stunning landscapes, vibrant culture, and rich historey, Cape Town has become a popular destination for both domestic and international travellers. As a result, the demand for airport transfer services has been steadily increasing. Key Market Trends:
            Increasing tourist arrivals: Cape Town continues to experience a steady growth in tourist arrivals, with an average annual increase of 5% over the past decade. This trend is expected to continue, driven by factors such as improved air connectivity and positive destination marketing efforts.
            Rising demand for luxury experiences: Luxury vacationers are increasingly seeking personalised and high-quality services during their travels.</p>
            <p> Shelly Tours aims to cater to this demand by providing top-notch airport transfer services and exclusive tour experiences.
            Growing interest in private tours: travellers are increasingly looking for unique and tailored experiences, including private tours. Shelly Tours offers private safari tours and wine tasting tours, providing customers with the opportunity to explore Cape Town's natural beauty and indulge in its renowned wine culture.
            Focus on sustainability: The tourism industry in Cape Town is placing a greater emphasis on sustainability and responsible tourism practises. Shelly Tours is committed to minimizing our environmental impact by adopting eco-friendly practises and partnering with sustainable suppliers.
            Increasing use of technology: The use of technology in the travel industry is on the rise, with online platforms playing a crucial role in booking and manageing travel arrangements. Shelly Tours leverages technology to streamline our operations, enhance customer experience, and reach a wider audience.
            In conclusion, Shelly Tours is entering a dynamic industry with a positive outlook. With the increasing number of tourists, growing demand for luxury experiences, and the trend towards personalised and sustainable travel, we are well-positioned to thrive in the market. By offering reliable airport transfers and a range of exclusive tour services, we aim to establish ourselves as a trusted and sought-after brand in Cape Town's tourism sector.</p>
          </div>
          <img src={about} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
