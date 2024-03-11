import React from 'react';
import Footer from './Footer';
import './styles/Home.css';
import Shelly from './assets/18683.jpg';
import longterm from './assets/time-is-passing-blue-hourglass-close-up.jpg';
import midterm from './assets/authentic-small-youthful-marketing-agency.jpg';
import shortterm from './assets/business-executives-reading-sticky-notes.jpg';

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
      <section>
        <div className="home-about m-4 p-4">
            <span>Get to know us better</span>
            <h2>Shelly tours: live life internationally</h2>
            <div className="flex flex-row items-start justify-around">
              <div>
                <p>Shelly Tours operates in the thriving airport transfer and tourism industry in Cape Town, South Africa. As an upcoming unlaunched business, we are poised to make a significant impact by providing efficient and reliable services to luxury vacationers in the region. Our distribution channels include both online platforms and a physical location, ensuring convenience and accessibility for our customers. The tourism industry in Cape Town is a key driver of economic growth, attracting millions of visitors each year. With its stunning landscapes, vibrant culture, and rich history, Cape Town has become a popular destination for both domestic and international travelers. As a result, the demand for airport transfer services has been steadily increasing.</p>
                <button className="more-about">Find out more {'>'}</button>
              </div>
              <img src={Shelly} />
            </div>
        </div>
        <div className="shelly-tours flex flex-col items-start">
          <div className="tours flex flex-row justify-between w-full">
            <div className="tour-1 tour">
              <span><strong>Wine Tasting</strong><br></br> Tours</span>
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
        <div className="why-us ">
          <h2>Why Choose Us</h2>
          <div className="why-us-p">
            <p>
              At Shelly Tours, we believe that our competitive advantage lies in our unwavering commitment to exceptional customer service, reliable transportation services, including hotel bookings, and the safety and security of our customers. Unlike our competitors, we prioritize the individual needs and preferences of our customers, ensuring that every aspect of their journey is tailored to perfection. Our team of experienced and knowledgeable tour guides and drivers are dedicated to providing personalized attention and creating memorable experiences. Furthermore, our focus on quality and expertise sets us apart in the industry, particularly evident in our wine tasting tours and private safari tours.
            </p>
            <button type="button" className="why-us-btn">Book an appointment</button>
          </div>
        </div>
        <div className="vision">
          <div>

          </div>
          <div>

          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              Founded with a vision to redefine the tourism industry in Capetown. As avid travelers ourselves, we recognized the need for a reliable and professional tour service that caters to the unique requirements of discerning and adventurous travelers, including hotel bookings. Our passion for showcasing the beauty of Capetown and our commitment to exceptional customer service led us to establish Shelly Tours. We are driven by our love for travel and our desire to create extraordinary experiences for our customers.
            </p>  
          </div>
            <div className="objectives">
              <div className="objective">
                <img src={shortterm} />
                <h3>Short term objectives</h3>
                <p>Increase brand awareness among luxury vacationers in Cape Town by implementing a targeted digital marketing campaign, reaching a minimum of 10,000 potential  customers within the first year.
                  Establish partnerships with at least five luxury hotels in Cape Town to offer exclusive hotel pick-up and drop-off services, increasing our customer base and revenue by 20% within the first two years.
                  Develop and launch a user-friendly mobile application for easy online booking and management of airport transfers and tour services, resulting in a 30% increase in online bookings within the first year.
                  Implement a customer referral programme, offering incentives for existing customers to refer new customers to Shelly Tours, aiming to acquire a minimum of 500 new customers through referrals within the first year.</p>
              </div>
              <div className="objective">
                <img src={midterm} />
                <h3>Mid term objectives</h3>
                <p>Expand our service offerings to include personalised and tailored tour packages, such as cultural heritage tours and adventure tours, catering to the diverse interests of luxury vacationers in Cape Town, resulting in a 15% increase in revenue within the next three years.
                  Enhance customer satisfaction and loyalty by consistently providing exceptional customer service, achieving a minimum customer satisfaction rating of 9 out of 10 in customer feedback surveys within the next three years.
                  Establish strategic partnerships with local travel agencies and tour operators to promote Shelly Tours as the preferred airport transfer and tour service provider in Cape Town, increasing our market share by 10% within the next three years.
                  Implement sustainable practises throughout our operations, such as using electric vehicles for airport transfers and partnering with eco-friendly suppliers, aiming to reduce our carbon footprint by 20% within the next three years.</p>
              </div>
              <div className="objective">
                <img src={longterm} />
                <h3>Long term objectives</h3>
                <p>Expand our business to other popular tourist destinations in South Africa, such as Johannesburg and Durban, within the next five years, establishing Shelly Tours as a leading airport transfer and tour service provider nationwide.
                Invest in advanced technology and data analytics to optimize our operations and improve efficiency, resulting in a 25% reduction in operational costs within the next five years.
                Become the top choice for luxury vacationers in Cape Town by achieving a 40% market share within the next five years, positioning Shelly Tours as the go-to brand for reliable, efficient, and exceptional airport transfer and tour services.
                Expand our team of employees to 100 skilled and dedicated professionals within the next five years, ensuring we have the capacity to meet the growing demand for our services and maintain our high standards of customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
