import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="main">
      <div className="border">
        <div className="border border-top"></div>
        <div className="border border-right"></div>
        <div className="border border-left"></div>
        <div className="border border-bottom"></div>
      </div>
      <p style={{ zIndex: 100 }}>
        1133 S. Vermont Ave #24, Los Angeles, CA 90006 (213) 674-7053
      </p>
      <ul className="menu">
        <li className="menu-item">
          <a href="#about">About Us</a>
        </li>
        <li className="menu-item">
          <a href="#menu">Menu</a>
        </li>
        <li className="menu-item">
          <a href="#catering">Catering</a>
        </li>
        <li className="menu-item">
          <a href="#info">Hours & Location</a>
        </li>
        <li className="menu-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hero">
        <Image
          src="/pescado_grande_white.png"
          alt="El Pescado Grande Logo"
          width="1000"
          height="600"
        />
        <h2 className="hero-subheading">
          Guatemalan & Salvadorian Seafood Fusion
        </h2>
      </div>
      <div className="about" id="about">
        <div className="about-hero">
          <Image
            className="about-image"
            src="/fish-plate.jpg"
            alt="Fish Plate"
            width="1500"
            height="500"
          />
          <h2 className="about-title">Our Story</h2>
        </div>
        <p className="about-text">
          El Pescado Grande is a family-owned restaurant located at 1133 S.
          Vermont Ave #24, Los Angeles, CA 90006. With a phone number of (213)
          674-7053, it offers a unique fusion of Guatemalan and Salvadorian
          seafood. The restaurant takes pride in its commitment to quality,
          using fresh ingredients and bold spices to create dishes inspired by
          the traditional flavors of Central America. Whether you're looking for
          an authentic dining experience or simply craving delicious seafood, El
          Pescado Grande is the place to be.
          <br />
          <br />
          At El Pescado Grande, we believe that food is not just about
          nourishment, but also about creating memories. Our team is dedicated
          to providing our customers with an unforgettable dining experience.
          From the moment you step into our restaurant, you'll be greeted with a
          warm and inviting atmosphere. Our menu offers a variety of options,
          from classic seafood dishes to innovative creations that showcase the
          best of Guatemalan and Salvadorian cuisine. Whether you're joining us
          for a casual lunch or a special occasion, we strive to make every
          visit to El Pescado Grande a memorable one.
        </p>
      </div>
      <div></div>
    </main>
  );
};

export default Home;
