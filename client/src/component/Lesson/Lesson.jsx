import './Lesson.scss';
import React from 'react'
import mathImage from '../../images/math.gif';
import englishImage from '../../images/english.gif';
import scienceImage from '../../images/science.gif';
import quezzImage from '../../images/quizzes.gif';
import typingImage from '../../images/typing.gif';
import gamesImage from '../../images/games.gif';
import { Link } from 'react-router-dom';

export default function Lesson() {
  return (
	<div className='lesson'>
		<h1 className='lesson__title'>Lessons & Practice</h1>
		<ul className='lesson__list'>
			<li className='lesson__item'>
					<Link className='lesson__link' to="https://www.khanacademy.org/math/get-ready-courses">
				<img className='lesson__image' src={mathImage} alt="math" />
				<h3 className='lesson__subtitle'>Math</h3>
				</Link>		
			</li>

			<li className='lesson__item'>
				<Link className='lesson__link' to="https://www.learningchocolate.com">
				<img className='lesson__image' src={englishImage} alt="english" />
				<h3 className='lesson__subtitle'>English</h3>
				</Link>
			</li>

			<li className='lesson__item'>
				<Link className='lesson__link' to="https://www.esa.int/kids">
				<img className='lesson__image' src={scienceImage} alt="science" />
				<h3 className='lesson__subtitle'>Science</h3>
				</Link>
			</li>

			<li className='lesson__item'>
				<Link className='lesson__link' to="https://www.mathopolis.com/questions/quizzes.php">
				<img className='lesson__image' src={quezzImage} alt="quizzes" />
				<h3 className='lesson__subtitle'>Quizzes</h3>
				</Link>
			</li>

			<li className='lesson__item'>
				<Link className='lesson__link' to="https://sd43burke.typingclub.com">
				<img className='lesson__image' src={typingImage} alt="typing" />
				<h3 className='lesson__subtitle'>Typing</h3>
				</Link>
			</li>

			<li className='lesson__item'>
				<Link className='lesson__link' to="https://www.gamestolearnenglish.com">
				<img className='lesson__image' src={gamesImage} alt="games" />
				<h3 className='lesson__subtitle'>Games</h3>
				</Link>
			</li>
		</ul>
	</div>
  )
}
// https://www.cbc.ca/kids/ games for fun
// https://code.org/minecraft 
// https://monkeytype.com/ test speeding
// https://www.typing.com/
// https://app.smartdraw.com/ for drawing bilding or design
// https://www.math10.com/en/tests/ math quizzes

// https://www.abcya.com/grades/k   kindergarden games
// https://learn.codethedream.org/ganymede-intro/  code 