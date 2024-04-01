import React from 'react';
import './More.scss';
import { features } from '../../data/features.jsx';
import { Link } from 'react-router-dom';

export default function More() {
  return (
    <div className='more'>
      <h1 className='more__title'>Fun Learning</h1>
      <h4 className='more__para'>More fun learning free websites</h4>
      <ul className='more__list'>
        {features.map((feature, index) => (
          <li key={index} className='more__item'>
            <Link className='more__link' to={feature.website}>
              <img
                className='more__image'
                src={feature.imageUrl}
                alt={feature.alt}
              />
              <p className='more__subtitle'>{feature.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
