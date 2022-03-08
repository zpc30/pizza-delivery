import React from 'react';

import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import Gallery from '../../components/Gallery';
import Menu from '../../components/Menu';

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <AboutUs />
        <Gallery />
        <Menu />
      </div>
    </>
  );
};

export default Home;
