import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = styled.nav`
  padding: 1rem 4rem;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem; // Añadido gap para separar el logo del resto
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1; // Añadido para dar más espacio al logo
  max-width: 50%; // Limitar el ancho máximo

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
`;

const LogoText = styled.div`
  font-size: 1.3rem; // Reducido ligeramente el tamaño
  color: #1a47cb;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1a47cb;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #1a47cb;
    &:after {
      width: 100%;
    }
  }
`;

const ContactButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: #1a47cb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: #1539a8;
    transform: translateY(-2px);
  }

  .icon {
    font-size: 1.2rem;
  }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  min-width: 200px;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isVisible ? '10px' : '0'});
  transition: all 0.3s ease;
  z-index: 1000;
`;

const SubMenuItem = styled.a`
  display: block;
  padding: 0.8rem 1.2rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f7ff;
    color: #1a47cb;
    padding-left: 1.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    color: #1a47cb;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const serviciosMenu = [
    { title: 'REPARACION DE CELULARES', href: '#celulares' },
    { title: 'SERVICIO DE LAPTOPS', href: '#laptops' },
    { title: 'REPARACION DE TABLETS', href: '#tablets' },
    { title: 'MANTENIMIENTO DE PC', href: '#pc' },
  ];

  const productosMenu = [
    { title: 'ACCESORIOS', href: '#accesorios' },
    { title: 'REPUESTOS', href: '#repuestos' },
    { title: 'PERIFETICOS', href: '#perifericos' },
  ];

  return (
    <Nav style={{ 
      backgroundColor: scrolled ? 'white' : 'transparent',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
    }}>
      <NavContainer>
        <LogoContainer>
          <LogoImage src="/images/cse-logo.jpg" alt="CSE Logo" />
          <LogoText>CENTRO DE SOLUCIONES DE COMPUTADORAS ELECTRONICOS</LogoText>
        </LogoContainer>
        
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon />
        </MobileMenuButton>

        <NavLinks>
          <NavItem 
            onMouseEnter={() => setActiveMenu('servicios')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink>SERVICIOS<KeyboardArrowDownIcon /></NavLink>
            <SubMenu isVisible={activeMenu === 'servicios'}>
              {serviciosMenu.map((item, index) => (
                <SubMenuItem key={index} href={item.href}>
                  {item.title}
                </SubMenuItem>
              ))}
            </SubMenu>
          </NavItem>

          <NavItem 
            onMouseEnter={() => setActiveMenu('productos')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink>PRODUCTOS<KeyboardArrowDownIcon /></NavLink>
            <SubMenu isVisible={activeMenu === 'productos'}>
              {productosMenu.map((item, index) => (
                <SubMenuItem key={index} href={item.href}>
                  {item.title}
                </SubMenuItem>
              ))}
            </SubMenu>
          </NavItem>

          <NavLink href="#ubicacion">UBICACION</NavLink>
          <ContactButton>
            <PhoneIcon className="icon" />
            961 372 3777
          </ContactButton>
        </NavLinks>

        <MobileMenu isOpen={isMobileMenuOpen}>
          <NavLink href="#servicios">SERVICIOS</NavLink>
          <NavLink href="#productos">PRODUCTOS</NavLink>
          <NavLink href="#ubicacion">UBICACION</NavLink>
          <ContactButton>
            <PhoneIcon className="icon" />
            961 372 3777
          </ContactButton>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  margin-right: 1rem;
`;