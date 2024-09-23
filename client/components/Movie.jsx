import React, { useState } from 'react';
import SearchedMovieInput from './SearchedMovieInput';
import { addWatchedMovie } from '../reducers/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Movie = ({
  title,
  description,
  release,
  poster,
  savedComment,
  /*onCommentChange,
  onMoveUp,
  onMoveDown,
  onActionClick,*/
  showArrows,
  actionLabel,
}) => {
  const image = `https://image.tmdb.org/t/p/original/${poster}`;
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();
  function onCommentChange(value) {
    setComment(value);
  }

  function onRateUp() {
    setRating(true);
  }

  function onRateDown() {
    setRating(false);
  }

  const navigate = useNavigate();

  function onActionClick() {
    console.log('onActionClick engaged');
    console.log('Comment is: ' + comment);
    if (comment) {
      console.log('Valid comment found. Sending post request');
      const movie = {
        title: title,
        overview: description,
        release_date: release,
        poster_path: poster,
      };
      //const id = useSelector((state) => state.auth.user.id);
      dispatch(addWatchedMovie(movie, 1, comment, rating))
        .unwrap()
        .then(() => navigate('/App'));
    }
  }

  let userComment = '';
  if (savedComment) {
    userComment = savedCommentcomment;
  }

  return (
    <li className='movie-card'>
      <div className='movie-image-placeholder'>
        <img src={image} alt='Movie poster' className='poster' />
      </div>
      <div className='movie-info'>
        <h3>{title}</h3>
        <p>Date: {release}</p>
        <p>Your comments: {userComment}</p>
        <input
          type='text'
          placeholder='Your comments'
          onChange={(e) => onCommentChange(e.target.value)}
        />
      </div>
      <div className='movie-actions'>
        {showArrows && (
          <div className='arrow-buttons'>
            <button className='arrow-btn' onClick={onRateUp}>
              ⬆
            </button>
            <button className='arrow-btn' onClick={onRateDown}>
              ⬇
            </button>
          </div>
        )}
        <button className='action-btn' onClick={onActionClick}>
          Add to list
          {actionLabel}
        </button>
      </div>
    </li>
  );
};

export default Movie;
