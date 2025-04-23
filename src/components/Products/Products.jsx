import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from 'framer-motion';

const ProductsSection = styled.section`
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  color: #1a47cb;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: #1a47cb;
    color: white;
    transform: translateY(-2px);
  }
`;

const ProductCard = styled.div`
  margin: 0 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 600px;
  width: 240px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 500px;
    width: 220px;
    margin: 0 auto;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(26, 71, 203, 0.2);
  }

  h3 {
    margin: 1rem 0;
    color: #1a47cb;
    font-size: 1.3rem;
    font-weight: bold;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    color: #666;
    line-height: 1.5;
    flex-grow: 1;
    font-size: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const ProductImage = styled.div`
  height: 400px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  max-width: 800px;
  width: 90%;
  position: relative;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  h3 {
    color: #1a47cb;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1a47cb;
`;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <>
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
            <ProductCard 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              onClick={() => setSelectedProduct(product)}
            >
              <ProductImage>
                <img src={product.image} alt={product.title} />
              </ProductImage>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </ProductCard>
          ))}
        </Slider>
      </ProductsSection>

      <AnimatePresence>
        {selectedProduct && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            >
              <CloseButton onClick={() => setSelectedProduct(null)}>×</CloseButton>
              <img src={selectedProduct.image} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.description}</p>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>

     
      
     
    </>
  );
};

export default Products;