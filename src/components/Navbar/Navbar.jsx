import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Nav = styled.nav`
  padding: 1rem 4rem;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: #1a47cb;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

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
    { title: 'Reparación de Celulares', href: '#celulares' },
    { title: 'Servicio de Laptops', href: '#laptops' },
    { title: 'Reparación de Tablets', href: '#tablets' },
    { title: 'Mantenimiento de PC', href: '#pc' },
  ];

  const productosMenu = [
    { title: 'Accesorios', href: '#accesorios' },
    { title: 'Repuestos', href: '#repuestos' },
    { title: 'Periféricos', href: '#perifericos' },
  ];

  return (
    <Nav style={{ 
      backgroundColor: scrolled ? 'white' : 'transparent',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
    }}>
      <NavContainer>
        <Logo>Centro de Soluciones Computadoras Electronicas</Logo>
        <NavLinks>
          <NavItem 
            onMouseEnter={() => setActiveMenu('servicios')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink>Servicios <KeyboardArrowDownIcon /></NavLink>
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
            <NavLink>Productos <KeyboardArrowDownIcon /></NavLink>
            <SubMenu isVisible={activeMenu === 'productos'}>
              {productosMenu.map((item, index) => (
                <SubMenuItem key={index} href={item.href}>
                  {item.title}
                </SubMenuItem>
              ))}
            </SubMenu>
          </NavItem>

          <NavLink href="#ubicacion">Ubicación</NavLink>
          <ContactButton>
            <PhoneIcon className="icon" />
            961 372 3777
          </ContactButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;