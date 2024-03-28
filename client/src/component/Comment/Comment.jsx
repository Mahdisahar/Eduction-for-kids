import React from 'react';
import axios from 'axios';
import './Comment.scss';
import { useState } from 'react';

const Base_URL = 'http://localhost:8085';

export default function Comment() {
const intialValues = {name: '', comment: ''};
const [formValue, setFormValue] = useState(intialValues);
const [formError, setFormError] = useState({});
const [comments, setComments] = useState([]);

  const handleChange = (e) => {
	const {name, value} = e.target;
	setFormValue({...formValue, [name]: value});
	setFormError({...formError, [name]: ''});
  }

const validate = (values) => {
	const errors = {};
	if(!values.name) {
		errors.name = "Please enter your name";
	} 
	if(!values.comment) {
		errors.comment = "please enter a comment here"
	}
	return errors;

}

 async function handleForm(event) {
    event.preventDefault();

	const errors = validate(formValue);
	if(Object.keys(errors).length !== 0) {
		setFormError(errors);
		return;
	}

	try {
		const response = await axios.post(`${Base_URL}/comment`,formValue);
	const postData = response.data;
	setComments([...comments, postData]);
	setFormValue(intialValues);
	event.target.reset();

	} catch (error) {
		console.log('Error posting new Comment', error);
	}
  }

  return (
    <div className='comment'>
      <h1 className='comment__title'>Your Opinion Matters</h1>
      <form className='comment__form' onSubmit={handleForm}>
        <div className='comment__container'>
          <label htmlFor='name' className='comment__label'>
            Name
          </label>
          <input
            className='comment__input'
            type='text'
            name='name'
            id='name'
			value={formValue.name}
            placeholder='Enter your name'
			onChange={handleChange}
          />
          {formError.name && <div className='comment__error'>{formError.name}</div>}
        </div>
        <div className='comment__container'>
          <label htmlFor='comment' className='comment__label'>
            Comment
          </label>
          <textarea
            className='comment__textarea'
            type='text'
            id='comment'
            name='comment'
            placeholder='Comment here'
			value={formValue.comment}
			onChange={handleChange}
          />
          {formError.comment && <div className='comment__error'>{formError.comment}</div>}
        </div>
        <div className='comment__button'>
          <button type="submit" className='comment__btn'>Submit</button>
        </div>
      </form>
	  <ul className='comment__list'>
		{comments.map((comment) => (
			<li key={comment.id} className='comment__item'>
			<h3 className='comment__subtitle'>name:{comment.name} </h3>
			<h3 className='comment__subtitle2'>Comment:{comment.comment} </h3>
		</li>
		))}
	  </ul>
    </div>
  );
}
