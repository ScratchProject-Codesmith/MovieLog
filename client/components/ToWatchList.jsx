import React, { useState } from 'react';
import Movie from './Movie';

const ToWatchList = () => {
  const [toWatchMovies, setToWatchMovies] = useState([
    { id: 1, title: 'Movie 1', comments: '', date: new Date().toLocaleDateString() },
    { id: 2, title: 'Movie 2', comments: '', date: new Date().toLocaleDateString() },
    { id: 3, title: 'Movie 3', comments: '', date: new Date().toLocaleDateString() },
  ]);

  const handleMarkAsWatched = (id) => {
    setToWatchMovies(toWatchMovies.filter((movie) => movie.id !== id));
  };

  const handleCommentChange = (id, newComment) => {
    setToWatchMovies(
      toWatchMovies.map((movie) =>
        movie.id === id ? { ...movie, comments: newComment } : movie
      )
    );
  };

  return (
    <div className="to-watch-list">
      <h2>Want to Watch</h2>
      <ul>
        {toWatchMovies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onCommentChange={handleCommentChange}
            onActionClick={handleMarkAsWatched}
            actionLabel="Mark as Watched"
            showArrows={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToWatchList;
