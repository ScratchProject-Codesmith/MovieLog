import React from 'react';
import SearchedMovieInput from './SearchedMovieInput';

const Movie = ({ title, description, release, poster, searchResult }) => {
  //onst { id, title, comments } = movie;
  /*<li className="movie-card">
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
    </li>*/
  const searchInput = [];
  if (searchResult) searchInput.push(<SearchedMovieInput />);
  const image = 'https://image.tmdb.org/t/p/original/' + poster;
  return (
    <div>
      <img className='poster' src={image} />
      <section>{title}</section>
      <section>{description}</section>
      <section>{release}</section>
      <section>{searchInput}</section>
    </div>
  );
};

export default Movie;
