import React from 'react';
import NavbarLink from '../../component/Navbar/Navbar';
import Header from '../../component/Header/Header';
import Lesson from '../../component/Lesson/Lesson';
import Learning from '../../component/Learning/Learning';
import More from '../../component/More/More';
import Comment from '../../component/Comment/Comment';
import Contact from '../../component/Contact/Contact';

function Homepage() {
  return (
	<div>	
		<NavbarLink/>
		<Header />
		<Lesson />
		<Learning  />
		<More  />
		<Comment  />
		<Contact />
	</div>
  )
}

export default Homepage