import React from 'react';
import SearchedMovieInput from './SearchedMovieInput';

const Movie = ({
  title,
  description,
  release,
  poster,
  comments,
  onCommentChange,
  onMoveUp,
  onMoveDown,
  onActionClick,
  showArrows,
  actionLabel,
}) => {
  const image = `https://image.tmdb.org/t/p/original/${poster}`;

  return (
    <li className='movie-card'>
      <div className='movie-image-placeholder'>
        <img src={image} alt='Movie poster' />
      </div>
      <div className='movie-info'>
        <h3>{title}</h3>
        <p>Date: {release}</p>
        <input
          type='text'
          value={comments}
          placeholder='Your comments'
          onChange={(e) => onCommentChange(e.target.value)}
        />
      </div>
      <div className='movie-actions'>
        {showArrows && (
          <div className='arrow-buttons'>
            <button className='arrow-btn' onClick={onMoveUp}>
              ⬆
            </button>
            <button className='arrow-btn' onClick={onMoveDown}>
              ⬇
            </button>
          </div>
        )}
        <button className='action-btn' onClick={onActionClick}>
          {actionLabel}
        </button>
      </div>
    </li>
  );
};

export default Movie;
