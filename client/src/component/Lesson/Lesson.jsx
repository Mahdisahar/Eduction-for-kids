import './Lesson.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Base_URL = 'http://localhost:8085';

export default function Lesson() {
  const [getLesson, setGetLesson] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${Base_URL}/lesson`);
        const getLessonData = response.data;
        setGetLesson(getLessonData);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }
    getData();
  }, []);

  return (
    <div className='lesson' id='lesson'>
      <h1 className='lesson__title'>Lessons & Practice</h1>
      <ul className='lesson__list'>
        {getLesson.map((Lessons) => (
          <li className='lesson__item' key={Lessons.id}>
            <Link className='lesson__link' to={Lessons.website}>
			<img className='lesson__image' src={Lessons.image} alt={Lessons.alt} />
              <h3 className='lesson__subtitle'>{Lessons.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
