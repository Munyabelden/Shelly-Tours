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
      <section className="main">
        <div className="home-about m-4 p-4">
            <span>Get to know us better</span>
            <h2>Shelly tours: live life internationally</h2>
            <div className="flex flex-row items-start justify-around">
              <div>
                <p>Shelly Tours operates in the thriving airport transfer and tourism industry in Cape Town, South Africa. As an upcoming unlaunched business, we are poised to make a significant impact by providing efficient and reliable services to luxury vacationers in the region. Our distribution channels include both online platforms and a physical location, ensuring convenience and accessibility for our customers. The tourism industry in Cape Town is a key driver of economic growth, attracting millions of visitors each year. With its stunning landscapes, vibrant culture, and rich historey, Cape Town has become a popular destination for both domestic and international travellers. As a result, the demand for airport transfer services has been steadily increasing.</p>
                <button className="more-about">Find out more {'>'}</button>
              </div>
              <img src={Shelly} />
            </div>
        </div>
        <div className="shelly-tours flex flex-col items-start">
          <div className="tours flex flex-row justify-between w-full">
            <div className="tour-1 tour">
              <span><strong>Wine</strong><br></br> Tours</span>
            </div>
            <div className="tour-2 tour">
              <span><strong>Safari</strong><br></br> Tours</span> 
            </div>
            <div className="tour-3 tour">
              <span><strong>Cape Of Good Hope</strong><br></br> Sightseeing</span> 
            </div>
          </div>
          <button type="button" className="home-tours-button self-center">Discover more tours and services</button>
        </div>
        <div className="why-us p-8">
          <h2>Why Choose Us</h2>
          <div>
            <p>
              At Shelly Tours, we believe that our competitive advantage lies in our unwavering commitment to exceptional customer service, reliable transportation services, including hotel bookings, and the safety and security of our customers. Unlike our competitors, we prioritize the individual needs and preferences of our customers, ensuring that every aspect of their journey is tailored to perfection. Our team of experienced and knowledgeable tour guides and drivers are dedicated to providing personalized attention and creating memorable experiences. Furthermore, our focus on quality and expertise sets us apart in the industry, particularly evident in our wine tasting tours and private safari tours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
