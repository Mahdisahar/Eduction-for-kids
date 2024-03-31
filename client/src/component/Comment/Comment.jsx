import React, { useEffect } from 'react';
import axios from 'axios';
import './Comment.scss';
import { useState } from 'react';

const Base_URL = 'http://localhost:8085';
const Base_Image = 'http://localhost:8085/images';

export default function Comment() {
  const intialValues = { name: '', comment: '' };
  const [formValue, setFormValue] = useState(intialValues);
  const [formError, setFormError] = useState({});
  const [comments, setComments] = useState([]);
  const [getComment, setGetComment] = useState([]);
 
  const date = new Date();
  const formatedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${(
    '0' + date.getDate()
  ).slice(-2)}/${date.getFullYear()}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setFormError({ ...formError, [name]: '' });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Please enter your name';
    }
    if (!values.comment) {
      errors.comment = 'please enter a comment here';
    }
    return errors;
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${Base_URL}/comment`);
      setGetComment( response.data);
    } catch (error) {
      console.log('Error fetching comments', error);
    }	
  };

  useEffect(() => {
	fetchComments();
  }, []);

  const deleteComment = async(id) => {
	try {
		await axios.delete(`${Base_URL}/comment/${id}`);
		// setDeleteComments(comments => comments.filter(comment => comment.id !== id));
		fetchComments();
	} catch (error) {
		console.log('Error deleting comment:', error);
	}
  };

  async function handleForm(event) {
    event.preventDefault();

    const errors = validate(formValue);
    if (Object.keys(errors).length !== 0) {
      setFormError(errors);
      return;
    }

    try {
      const response = await axios.post(`${Base_URL}/comment`, formValue);
      const postData = response.data;
      setComments([...comments, postData]);
      setFormValue(intialValues);
      event.target.reset();
	  fetchComments();
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
          {formError.name && (
            <div className='comment__error'>{formError.name}</div>
          )}
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
          {formError.comment && (
            <div className='comment__error'>{formError.comment}</div>
          )}
        </div>
        <div className='comment__button'>
          <button type='submit' className='comment__btn'>
            Submit
          </button>
        </div>
      </form>
      <ul className='comment__list'>
		{getComment.map((comment) => (
          <li key={comment.id} className='comment__item'>
			<div className='comment__commentscontainer'>
				<img className="comment__commentscontainer--image" src={`${Base_Image}/${comment.image}`} alt="comment" />
	
				<div className='comment__time'>
					<h5 className='comment__subtitle'>{comment.name} </h5>
					<p className='comment__formatdate'>{formatedDate}</p>
				</div>
			</div>  
            <p className='comment__subtitle2'>{comment.comment} </p>
            <button className='comment__delete' onClick={() => deleteComment(comment.id)} >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
