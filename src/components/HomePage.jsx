import React from 'react';
import Carousel from './Carousel';
import Destinations from './Destinations';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Search from './Search';
import Selects from './Selects';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomePage;
