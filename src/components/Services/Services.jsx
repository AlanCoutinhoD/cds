import React from 'react';
import styled from 'styled-components';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopIcon from '@mui/icons-material/Laptop';
import TabletIcon from '@mui/icons-material/Tablet';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import WifiIcon from '@mui/icons-material/Wifi';

const ServicesSection = styled.section`
  padding: 4rem;
  text-align: center;
`;

const Title = styled.h2`
  color: #1a47cb;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 450px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 20px rgba(26, 71, 203, 0.2);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ServiceCard}:hover & img {
    transform: scale(1.05);
  }
`;

const Services = () => {
  const services = [
    {
      icon: <PhoneAndroidIcon className="icon" />,
      title: "Reparación de Celulares",
      description: "Arreglamos pantallas, baterías, puertos de carga y más para todos los modelos.",
      image: "/images/telefono reparacion.jpg"
    },
    {
      icon: <LaptopIcon className="icon" />,
      title: "Servicio de Laptops",
      description: "Reparación de hardware, actualización de componentes y solución de problemas de software.",
      image: "/images/laptop reparacion.jpg"
    },
    {
      icon: <TabletIcon className="icon" />,
      title: "Reparación de Tablets",
      description: "Servicio técnico especializado para tablets de todas las marcas.",
      image: "/images/tablet.jpg"
    },
    {
      icon: <ComputerIcon className="icon" />,
      title: "Mantenimiento de PC",
      description: "Limpieza, optimización y actualización de componentes para mejor rendimiento.",
      image: "/images/pc repair.png"
    },
    {
      icon: <StorageIcon className="icon" />,
      title: "Recuperación de Datos",
      description: "Recuperamos información de dispositivos dañados o con fallos.",
      image: "/images/recuperacion datos.jpg"
    },
    {
      icon: <WifiIcon className="icon" />,
      title: "Configuración de Redes",
      description: "Instalación y configuración de redes WiFi, cableado de sistemas de seguridad.",
      image: "/images/wifi.jpg"
    }
  ];

  return (
    <ServicesSection id="servicios">
      <Title>Soluciones Completas para tus Dispositivos</Title>
      <p>Ofrecemos una amplia gama de servicios de reparación y mantenimiento para todo tipo de dispositivos electrónicos.</p>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage>
              <img src={service.image} alt={service.title} />
            </ServiceImage>
            <div className="icon-container">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;