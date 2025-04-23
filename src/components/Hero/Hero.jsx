import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = styled.section`
  padding: 0;
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  margin-top: 80px; // Añadir espacio para el navbar
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;

  .slick-slide img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  .slick-dots {
    bottom: 20px;
    z-index: 10; // Asegurar que los puntos estén sobre la imagen
    
    li button:before {
      color: white;
      font-size: 12px;
    }
  }
`;

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };

  const images = [
    '/images/negocio 1.jpg',
    '/images/negocio 2.jpg',
    '/images/negocio 3.jpg',
    '/images/negocio7.jpg',
    '/images/negocio 4.jpg',
    '/images/negocio 10.jpg',
    '/images/negocio 8.jpg',
    '/images/negocio 9.jpg',
    '/images/negocio 11.jpg',
  ];

  return (
    <HeroSection>
      <CarouselContainer data-aos="fade">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Imagen del negocio ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </HeroSection>
  );
};

export default Hero;

// Add these styled components after HeroContent and before CarouselContainer
const Title = styled.h1`
  color: #1a47cb;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: #1a47cb;
    color: white;
    &:hover {
      background-color: #1539a8;
    }
  }
  
  &.secondary {
    background-color: white;
    color: #1a47cb;
    border: 1px solid #1a47cb;
    &:hover {
      background-color: #f0f3ff;
    }
  }
`;