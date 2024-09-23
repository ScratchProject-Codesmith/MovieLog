import React, { useState } from 'react';
import Movie from './Movie';

const WatchedList = ({ watchedMovies }) => {
  /*const [watchedMovies, setWatchedMovies] = useState([
    {
      id: 1,
      title: 'Movie 4',
      comments: '',
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: 'Movie 5',
      comments: '',
      date: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      title: 'Movie 6',
      comments: '',
      date: new Date().toLocaleDateString(),
    },
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
  };*/

  /*return (
    <div className='watched-list'>
      <h2>Movies Watched</h2>
      <ul>
        {watchedMovies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onCommentChange={handleCommentChange}
            onActionClick={handleInfoClick}
            actionLabel='Info'
            showArrows={false}
            title={watchedMovies.title}
          />
        ))}
      </ul>
    </div>
  );*/
  return (
    <div>
      <Movie
        title={watchedMovies.title}
        description={watchedMovies.overview}
        release={watchedMovies.release_date}
        poster={watchedMovies.poster_path}
      />
    </div>
  );
};

export default WatchedList;
