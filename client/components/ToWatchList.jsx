import React, { useState } from 'react';
import Movie from './Movie';

const ToWatchList = () => {
  const [moviesToWatch, setMoviesToWatch] = useState([
    { id: 1, title: 'Movie 1', comments: '', date: new Date().toLocaleDateString() },
    { id: 2, title: 'Movie 2', comments: '', date: new Date().toLocaleDateString() },
    { id: 3, title: 'Movie 3', comments: '', date: new Date().toLocaleDateString() },
  ]);

  const moveUp = (index) => {
    if (index === 0) return;
    const newMovies = [...moviesToWatch];
    [newMovies[index - 1], newMovies[index]] = [newMovies[index], newMovies[index - 1]];
    setMoviesToWatch(newMovies);
  };

  const moveDown = (index) => {
    if (index === moviesToWatch.length - 1) return;
    const newMovies = [...moviesToWatch];
    [newMovies[index + 1], newMovies[index]] = [newMovies[index], newMovies[index + 1]];
    setMoviesToWatch(newMovies);
  };

  const handleCommentChange = (id, newComment) => {
    const updatedMovies = moviesToWatch.map((movie) =>
      movie.id === id ? { ...movie, comments: newComment } : movie
    );
    setMoviesToWatch(updatedMovies);
  };

  return (
    <div className="to-watch-list">
      <h2>Want to Watch</h2>
      <ul>
        {moviesToWatch.map((movie, index) => (
          <Movie
            key={movie.id}
            movie={movie}
            onCommentChange={handleCommentChange}
            onMoveUp={() => moveUp(index)}
            onMoveDown={() => moveDown(index)}
            showArrows={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToWatchList;

