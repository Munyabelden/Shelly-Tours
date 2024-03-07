import React from 'react';
import Footer from './Footer';
import './styles/Services.css';

const Services = () => {
  return (
    <div className="div-services">
      <div className="header-home services">
        <div className="header-p">
          <h1>What We Offer</h1>
          <p>Embarking on a business trip or planning a luxurious vacation to Cape Town? Look no further! We cater to all your needs with a touch of luxury. Whether you're seeking a seamless business experience or a relaxing getaway, explore our curated services. Simply peruse through our offerings and send us an email – we'll take care of the rest. Elevate your journey with us and make your time in Cape Town unforgettable.</p>
          <button className="learn-more">Send us an email {'>'} </button>
        </div>
        <div>
          
        </div>
      </div>
      <p>After careful consideration, we have chosen to target the Luxury Vacationers and Frequent Business travellers segments. These segments align with our business's capability to provide exceptional service, reliability, and professionalism.
        By focusing on these segments, we can leverage our expertise in airport transfers and tailor our services to meet the specific needs of luxury vacationers and frequent business travellers. Additionally, these segments have higher income levels, making them more likely to prioritise and invest in premium travel experiences.</p>
      <section className="shelly-services">
        <div className="service wine">
        <div>
            <h3>Wine Tasting Tours</h3>
            <p>Explore the enchanting world of wine through our curated wine tasting tours in Cape Town. Immerse yourself in the breathtaking landscapes of the renowned Cape Winelands as you embark on a journey through historic vineyards, each with its unique charm and story. Our expert-guided tours offer an exclusive opportunity to savor the finest South African wines all while gaining insights into the winemaking process.</p>
          </div>
        </div>
        <div className="service safari light">
        <div>
          <h3>Safari Tour</h3>
          <p>A once-in-a-lifetime adventure with our safari tours in Cape Town, where the untamed beauty of the African wilderness awaits. Our carefully curated safari experiences promise an immersive journey into the heart of nature, allowing you to witness the majesty of wildlife in their natural habitats.</p>
          </div>
        </div>
        <div className="service good-hope">
        <div>
          <h3>Cape of Good Hope Sight Seeing</h3>
          <p>Experience the breathtaking beauty of the Cape of Good Hope with our curated sightseeing tours. Nestled at the southern tip of the Cape Peninsula, this iconic landmark offers a mesmerizing blend of rugged cliffs, pristine beaches, and diverse flora and fauna.</p>
          </div>
        </div>
        <div className="service hotel-booking">
        <div>
          <h3>Hotel Bookings</h3>
          <p>
            Elevate your travel experience with our exclusive luxury hotel bookings service. Immerse yourself in opulence and sophistication as we curate unparalleled accommodations tailored to your discerning taste. Whether you're seeking a lavish city retreat, a beachfront oasis, or a secluded mountain escape, our portfolio of handpicked luxury hotels ensures an unforgettable stay.</p>
            </div>
        </div>
        <div className="service airport">
        <div>
          <h3>Airport Transportation Services</h3>
          <p>We redefine the art of travel, providing a seamless and opulent experience from the moment you land to your final destination. Our fleet of high-end vehicles, manned by professional chauffeurs, ensures a prestigious and stress-free transition.</p>
          </div>
        </div>
        <div className="service drop-off light">
        <div>
          <h3>Hotel Pickup and Drop offs</h3>
          <p>Experience the pinnacle of convenience and luxury with our hotel pick-up and drop-off services. We understand the importance of a seamless transition between your accommodation and your destinations, and we've curated a service that embodies comfort, punctuality, and a touch of sophistication.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Services
