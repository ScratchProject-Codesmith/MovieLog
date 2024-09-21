import React from 'react';

const Movie = ({ movie, onCommentChange, onActionClick, actionLabel }) => {
  const { id, title, comments } = movie;

  return (
    <li className="movie-card">
      <div className="movie-image-placeholder">
        <img src="https://via.placeholder.com/100x150" alt={`${title} poster`} />
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <input
          type="text"
          placeholder="Your comments"
          value={comments}
          onChange={(e) => onCommentChange(id, e.target.value)}
        />
        <button onClick={() => onActionClick(id)}>{actionLabel}</button>
      </div>
    </li>
  );
};

export default Movie;
