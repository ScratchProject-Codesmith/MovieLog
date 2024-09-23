import React from 'react';

const Movie = ({ title, description, release, poster }) => {
  //onst { id, title, comments } = movie;
  /*<li className="movie-card">
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
    </li>*/
  const image = 'https://image.tmdb.org/t/p/original/' + poster;
  return (
    <div>
      <img className='poster' src={image} />
      <section>{title}</section>
      <section>{description}</section>
      <section>{release}</section>
    </div>
  );
};

export default Movie;
