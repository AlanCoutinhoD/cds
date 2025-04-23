import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactSection = styled.section`
  padding: 4rem;
  background-color: #f8f9ff;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: #1a47cb;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      text-align: center;
      font-size: 1.8rem;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  .icon {
    color: #1a47cb;
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #666;
  }

  a {
    color: #1a47cb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="ubicacion">
      <ContactContainer>
        <ContactInfo>
          <h2>Contáctanos</h2>
          <ContactItem>
            <PhoneIcon className="icon" />
            <p>
              <a href="tel:9613723777">961 372 3777</a>
            </p>
          </ContactItem>
          <ContactItem>
            <WhatsAppIcon className="icon" />
            <p>
              <a href="https://wa.me/529613723777" target="_blank" rel="noopener noreferrer">
                WhatsApp: 961 372 3777
              </a>
            </p>
          </ContactItem>
          <ContactItem>
            <EmailIcon className="icon" />
            <p>
              <a href="mailto:contacto@centrosoluciones.com">contacto@centrosoluciones.com</a>
            </p>
          </ContactItem>
          <ContactItem>
            <LocationOnIcon className="icon" />
            <p>Calle 5ta Norte Poniente #1125, Tuxtla Gutiérrez, Chiapas</p>
          </ContactItem>
        </ContactInfo>
        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5123123456789!2d-93.12345678901234!3d16.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA3JzM0LjQiTiA5M8KwMDcnMTIuMyJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del negocio"
          />
        </MapContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;