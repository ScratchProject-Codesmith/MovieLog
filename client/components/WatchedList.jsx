import React, { useState } from 'react';
import Movie from './Movie';

const WatchedList = () => {
  const [watchedMovies, setWatchedMovies] = useState([
    { id: 1, title: 'Movie 4', comments: '' },
    { id: 2, title: 'Movie 5', comments: '' },
    { id: 3, title: 'Movie 6', comments: '' },
  ]);

  const handleCommentChange = (id, newComment) => {
    setWatchedMovies(
      watchedMovies.map((movie) =>
        movie.id === id ? { ...movie, comments: newComment } : movie
      )
    );
  };

  const handleInfoClick = (id) => {
    console.log(`Show info for movie with id: ${id}`);
  };

  return (
    <div className="watched-list">
      <h2>Movies Watched</h2>
      <ul>
        {watchedMovies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onCommentChange={handleCommentChange}
            onActionClick={handleInfoClick}
            actionLabel="Info"
          />
        ))}
      </ul>
    </div>
  );
};

export default WatchedList;
