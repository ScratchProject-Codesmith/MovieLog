import React from 'react';
const Movie = ({ movie, onCommentChange, onActionClick, actionLabel, showArrows }) => {
  return (
    <li key={movie.id} className="movie-card">
      <div className="movie-image-placeholder">
        <img src="https://via.placeholder.com/100x150" alt="Movie poster" />
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Date: {movie.date}</p>
        <input
          type="text"
          value={movie.comments}
          placeholder="Your comments"
          onChange={(e) => onCommentChange(movie.id, e.target.value)}
        />
      </div>
      <div className="movie-actions">
        {showArrows && (
          <div className="arrow-buttons">
            <button className="arrow-btn">↑</button>
            <button className="arrow-btn">↓</button>
          </div>
        )}
        <button className="action-btn" onClick={() => onActionClick(movie.id)}>
          {actionLabel}
        </button>
      </div>
    </li>
  );
};

export default Movie;