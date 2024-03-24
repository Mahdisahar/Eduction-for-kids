import React from 'react'
import './Homepage.scss';
import NavbarLink from '../../component/Navbar/Navbar';
import Header from '../../component/Header/Header';
import Lesson from '../../component/Lesson/Lesson';

function Homepage() {
  return (
	<div>
		<NavbarLink/>
		<Header />
		<Lesson />

	</div>
  )
}

export default Homepage