import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banners from './components/Banners';
import CuteStationery from './components/CuteStationery';
import Categories from './components/Categories';
import Promo from './components/Promo';
import DarkPromo from './components/DarkPromo';
import Testimonials from './components/Testimonials';
import SellingProducts from './components/SellingProducts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Banners />
      <CuteStationery />
      <Categories />
      <Promo />
      <DarkPromo />
      <Testimonials />
      <SellingProducts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
