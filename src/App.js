import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    line-height: 1.6;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
  }

  p {
    font-weight: 300;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero data-aos="fade-up" />
      <Services data-aos="fade-up" />
      <Products data-aos="fade-up" />
      <Location data-aos="fade-up" />
      <Footer />
    </>
  );
}

export default App;