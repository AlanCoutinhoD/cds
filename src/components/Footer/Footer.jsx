import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  background-color: #1a47cb;
  color: white;
  width: 100%;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Derechos reservados ing willian 2026 CSCE</p>
    </FooterContainer>
  );
};

export default Footer;