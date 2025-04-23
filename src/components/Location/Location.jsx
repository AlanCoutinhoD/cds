import React from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const LocationSection = styled.section`
  padding: 4rem;
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const InfoContainer = styled.div`
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    
    .icon {
      color: #1a47cb;
      margin-right: 1rem;
    }
  }
`;

const MapContainer = styled.div`
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Location = () => {
  // En el componente Location
  return (
    <LocationSection id="ubicacion" data-aos="fade-up">
      <Title data-aos="fade-up">Visítanos</Title>
      <Subtitle data-aos="fade-up">Estamos ubicados en un lugar céntrico y accesible para brindarte el mejor servicio.</Subtitle>
      
      <ContentWrapper>
        <InfoContainer data-aos="fade-right">
          <div className="info-item">
            <LocationOnIcon className="icon" />
            <div>
              <h3>Dirección</h3>
              <p>6A PONIENTE NORTE 168 B AV CENTRAL, Nte. Pte. 1A, Guadalupe</p>
              <p>29000 Tuxtla Gutiérrez, Chiapas</p>
            </div>
          </div>
          
          <div className="info-item">
            <PhoneIcon className="icon" />
            <div>
              <h3>Teléfono</h3>
              <p>+52 961 372 3777</p>
            </div>
          </div>
          
          <div className="info-item">
            <AccessTimeIcon className="icon" />
            <div>
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              <p>Sábados: 10:00 AM - 4:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </InfoContainer>

        <MapContainer data-aos="fade-left">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5144068485387!2d-93.12094842374084!3d16.755151088455723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd97545bbdc29%3A0x7001547949a1a636!2sCENTRO%20DE%20SOLUCIONES%20DE%20COMPUTADORAS%20ELECTRONICAS!5e0!3m2!1ses!2smx!4v1708487825044!5m2!1ses!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </ContentWrapper>
    </LocationSection>
  );
};

export default Location;