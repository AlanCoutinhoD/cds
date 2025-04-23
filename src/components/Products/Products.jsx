import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsSection = styled.section`
  padding: 4rem;
  background-color: #f8f9ff;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  margin: 0 1rem; // Reducido el margen horizontal
  padding: 1.5rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 600px;
  width: 240px; // Ancho reducido para acomodar 5 tarjetas
  display: flex;
  flex-direction: column;
  margin: 0 auto; // Centrar la tarjeta

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(26, 71, 203, 0.2);
  }

  h3 {
    margin: 1rem 0;
    color: #1a47cb;
    font-size: 1.3rem;
    font-weight: bold;
  }

  p {
    color: #666;
    line-height: 1.5;
    flex-grow: 1;
    font-size: 1rem;
  }
`;

const ProductImage = styled.div`
  height: 400px; // Altura aumentada para la imagen
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
  }
`;

const Title = styled.h2`
  color: #1a47cb;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 3rem;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: 2px solid #1a47cb;
  border-radius: 5px;
  background-color: ${props => props.active ? '#1a47cb' : 'white'};
  color: ${props => props.active ? 'white' : '#1a47cb'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: #1a47cb;
    color: white;
    transform: translateY(-2px);
  }
`;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Cambiado de 3 a 5
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const products = [
    // Celulares y Accesorios
    {
      title: "Celulares",
      description: "Amplia variedad de smartphones de diferentes marcas",
      image: "/images/celulares.jpg",
      category: "celulares"
    },
    {
      title: "Accesorios para Celulares",
      description: "audifonos para tu dispositivo",
      image: "/images/audifonos.jpeg",
      category: "celulares"
    },
    {
      title: "Micas Protectoras",
      description: "Protección de pantalla de alta calidad",
      image: "/images/micas.jpg",
      category: "celulares"
    },

    // Laptops y Accesorios
    {
      title: "Laptops",
      description: "Computadoras portátiles de diversas marcas",
      image: "/images/laptop.jpg",
      category: "laptops"
    },
    {
      title: "Pantallas para Laptops",
      description: "Pantallas de reemplazo para diversos modelos",
      image: "/images/pantallas laptop.jpeg",
      category: "laptops"
    },
    {
      title: "Pantallas para MacBook",
      description: "Pantallas originales para MacBook",
      image: "/images/pantalla mac.png",
      category: "laptops"
    },
    {
      title: "Bocinas para Laptops",
      description: "Altavoces externos para mejor sonido",
      image: "/images/bocinas.png",
      category: "laptops"
    },
    {
      title: "Bocinas para MacBook",
      description: "Altavoces compatibles con MacBook",
      image: "/images/bocinas mac.jpeg",
      category: "laptops"
    },

    // Computadoras y Componentes
    {
      title: "Computadoras",
      description: "Equipos de escritorio para hogar u oficina",
      image: "/images/pc.png",
      category: "computadoras"
    },
    {
      title: "Memoria RAM",
      description: "Memorias RAM de alta velocidad",
      image: "/images/memoria ram.jpeg",
      category: "computadoras"
    },
    {
      title: "Disco Duro SSD",
      description: "Almacenamiento de estado sólido de alta velocidad",
      image: "/images/disco duro.jpg",
      category: "computadoras"
    },
    {
      title: "Disco Duro Mecánico",
      description: "Almacenamiento tradicional de gran capacidad",
      image: "/images/disco solido.jpg",
      category: "computadoras"
    },
    {
      title: "Tarjetas para Computadoras",
      description: "Tarjetas de video, sonido y más",
      image: "/images/tarjeta video.jpg",
      category: "computadoras"
    },

    // Periféricos y Accesorios
    {
      title: "Audífonos",
      description: "Audífonos con y sin cable de alta calidad",
      image: "/images/audifonos gamer.jpg",
      category: "perifericos"
    },
    {
      title: "Mouse",
      description: "Mouse ergonómicos y gaming",
      image: "/images/mouse.jpeg",
      category: "perifericos"
    },
    {
      title: "Teclados",
      description: "Teclados mecánicos y membrana",
      image: "/images/teclado.jpg",
      category: "perifericos"
    },
    {
      title: "Bocinas para TV",
      description: "Sistemas de sonido para televisores",
      image: "/images/bocinas tv.jpg",
      category: "perifericos"
    },
    {
      title: "Accesorios para Impresoras",
      description: "Cartuchos, cables y más",
      image: "/images/accesorios impresora.jpg",
      category: "perifericos"
    }
  ];

  // Añadir esta definición antes del return
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <ProductsSection id="productos" data-aos="fade-up">
      <Title>Productos y Accesorios</Title>
      <Subtitle>Encuentra todo lo que necesitas para tus dispositivos electrónicos</Subtitle>
      
      <FilterButtons>
        <FilterButton 
          active={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
        >
          Todos
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'celulares'}
          onClick={() => setActiveCategory('celulares')}
        >
          Celulares y Accesorios
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'laptops'}
          onClick={() => setActiveCategory('laptops')}
        >
          Laptops y Accesorios
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'computadoras'}
          onClick={() => setActiveCategory('computadoras')}
        >
          Computadoras y Componentes
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'perifericos'}
          onClick={() => setActiveCategory('perifericos')}
        >
          Periféricos y Accesorios
        </FilterButton>
      </FilterButtons>
      
      <Slider {...settings}>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <ProductImage>
              <img src={product.image} alt={product.title} />
            </ProductImage>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </ProductCard>
        ))}
      </Slider>
    </ProductsSection>
  );
};

export default Products;