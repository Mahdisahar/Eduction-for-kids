import React from 'react';
import './Header.scss';
import headerImage from '../../images/kids.png';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__containers'>
		<h1 className='header__title'>FREE ONLINE COURSES</h1>
		<img className='header__img' src={headerImage} alt='children' />
          {/* <h1 className='header__title'>FREE ONLINE COURSES</h1>
          <img className='header__img' src={headerImage} alt='children' /> */}
        </div>
      </div>
  );
}
