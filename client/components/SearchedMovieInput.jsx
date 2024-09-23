import React, { useState } from 'react';

function SearchedMovieInput() {
  const { addComment, setAddComment } = useState(false);
  return (
    <div>
      <span>
        <button>I watched this movie</button>
      </span>
      <span>
        <button>I want to see this movie</button>
      </span>
    </div>
  );
}

export default SearchedMovieInput;
