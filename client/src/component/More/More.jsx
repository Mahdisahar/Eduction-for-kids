import React from 'react';
import './More.scss';
import cbcImage from '../../images/cbc.jpg';
import mincraftImage from '../../images/mincraft.jpg';
import speedingImage from '../../images/typing.jpg';
// import drawingImage from '../../images/draw.png';
import mathTestImage from '../../images/math-quiz-game.png';
import abcImage from '../../images/abcya.png';
import codeImage from '../../images/code.jpg';

import { Link } from 'react-router-dom';

export default function More() {
  return (
    <div className='more'>
      <h1 className='more__title'>Fun Learning</h1>
      <h4 className='more__para'>More fun learning free websites</h4>
      <ul className='more__list'>
        <li className='more__item'>
          <Link className='more__link' to='https://www.cbc.ca/kids/'>
            <img className='more__image' src={cbcImage} alt='cbc' />
            <p className='more__subtitle'>Fun Games</p>
          </Link>
        </li>

        <li className='more__item'>
          <Link className='more__link' to='https://code.org/minecraft'>
            <img className='more__image' src={mincraftImage} alt='mingraft' />
            <p className='more__subtitle'>Mincraft</p>
          </Link>
        </li>

		<li className='more__item'>
          <Link className='more__link' to='https://monkeytype.com/'>
            <img className='more__image' src={speedingImage} alt='speeding' />
            <p className='more__subtitle'>Speeding Test</p>
          </Link>
        </li>

		{/* <li className='more__item'>
          <Link to='https://app.smartdraw.com/'>
            <img className='more__image' src={drawingImage} alt='draw' />
            <p className='more__subtitle'>Smart Drawing</p>
          </Link>
        </li> */}

		<li className='more__item'>
          <Link className='more__link' to='https://www.math10.com/en/tests/ '>
            <img className='more__image' src={mathTestImage} alt='test' />
            <p className='more__subtitle'>Math Test</p>
          </Link>
        </li>

		<li className='more__item'>
          <Link className='more__link' to='https://www.abcya.com/grades/k'>
            <img className='more__image' src={abcImage} alt='abc' />
            <p className='more__subtitle'>Games for K</p>
          </Link>
        </li>

		<li className='more__item'>
          <Link className='more__link' to='https://learn.codethedream.org/ganymede-intro/'>
            <img className='more__image' src={codeImage} alt='code' />
            <p className='more__subtitle'>Code The Dream</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

// https://www.cbc.ca/kids/ games for fun
// https://code.org/minecraft
// https://monkeytype.com/ test speeding
// https://www.typing.com/
// https://app.smartdraw.com/ for drawing bilding or design
// https://www.math10.com/en/tests/ math quizzes

// https://www.abcya.com/grades/k   kindergarden games
// https://learn.codethedream.org/ganymede-intro/  code
