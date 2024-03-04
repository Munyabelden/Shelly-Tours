import React from 'react';
import './styles/Home.css';
import Shelly from './assets/18683.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="header-home">
        <div className="header-p">
          <h1>Experience is everything</h1>
          <p>Specializing in airport transfer and tourism services, including hotel bookings. We aim to provide exceptional customer service and reliable transportation solutions for Luxury Vacationers, Frequent Business travelers, and Family Vacationers. Our distribution channels include both online platforms and a physical location, ensuring convenience and accessibility for our diverse customer segments. With a team of 50 dedicated employees, we are committed to delivering unforgettable experiences and creating lasting memories for our customers.</p>
          <button className="learn-more">Learn more about our tours {'>'} </button>
        </div>
        <div>
          
        </div>
      </div>
      <section className="main m-4 p-4">
        <div className="home-about">
            <span>Get to know us better</span>
            <h2>Shelly tours live life internationally</h2>
            <div className="flex flex-row items-start justify-around">
              <p>Shelly Tours operates in the thriving airport transfer and tourism industry in Cape Town, South Africa. As an upcoming unlaunched business, we are poised to make a significant impact by providing efficient and reliable services to luxury vacationers in the region. Our distribution channels include both online platforms and a physical location, ensuring convenience and accessibility for our customers. The tourism industry in Cape Town is a key driver of economic growth, attracting millions of visitors each year. With its stunning landscapes, vibrant culture, and rich historey, Cape Town has become a popular destination for both domestic and international travellers. As a result, the demand for airport transfer services has been steadily increasing.</p>
              <img  src={Shelly} alt="just an image"/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home
