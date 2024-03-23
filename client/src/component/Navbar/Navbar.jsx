import React from 'react';
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.jpg';
import NavLink from 'react-bootstrap/esm/NavLink';


export default function NavbarLink() {
  return (
    <div className='navbarnav'>
      <Navbar expand='md' className='navbarnav__link'>
        <Container fluid>
          <Navbar.Brand href='#'>
			<img className='navbarnav__logo' src={logo} alt="logo" />
		  </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
            //   className='me-auto my-2 my-lg-0'
              navbarScroll
            >
			 <NavLink>
				  <Nav href='#action1' className='navbarnav__linkitem'>Home</Nav>
			 </NavLink>

			 <NavLink>
				  <Nav href='#action2' className='navbarnav__linkitem'>Link</Nav>
			 </NavLink>

			  <NavLink to='/'>
				<Nav href='#' className='navbarnav__linkitem'>
                Link
              </Nav>
			  </NavLink>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
