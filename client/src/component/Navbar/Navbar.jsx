import React from 'react';
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.jpg';
import NavLink from 'react-bootstrap/esm/NavLink';

export default function NavbarLink() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div className='navbarnav'>
      <Navbar expand='md' className='navbarnav__link'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <img className='navbarnav__logo' src={logo} alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav navbarScroll>
              <Navbar.Collapse id='navbarScroll'>
                <Nav className='mr-auto' navbarScroll>
                  <NavLink>
                    <Nav
                      href='#'
                      onClick={() => scrollToSection('lesson')}
                      className='navbarnav__linkitem'
                    >
                      Lessons
                    </Nav>
                  </NavLink>

				  <NavLink>
                    <Nav
                      href='#'
					  onClick={() => scrollToSection('learning')}
                      className='navbarnav__linkitem'
                    >
                      Learning
                    </Nav>
                  </NavLink>

				  <NavLink>
                    <Nav
                      href='#'
					  onClick={() => scrollToSection('comment')}
                      className='navbarnav__linkitem'
                    >
                       Your Opinion
                    </Nav>
                  </NavLink> 
				  <NavLink>
                    <Nav
                      href='#'
					  onClick={() => scrollToSection('contact')}
                      className='navbarnav__linkitem'
                    >
                      Contact us
                    </Nav>
                  </NavLink> 	
				  </Nav>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
