import React, { useState } from "react";
import "./MovieSearch.css";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
    { id: 3, title: "The Dark Knight" },
    { id: 4, title: "The Matrix" },
    { id: 5, title: "Avatar" },
  ]);
  const [movieFound, setMovieFound] = useState(false);
  const [foundMovieTitle, setFoundMovieTitle] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = query.trim().toLowerCase();
    const foundMovie = movies.find(
      (movie) => movie.title.toLowerCase() === searchTerm
    );
    if (foundMovie) {
      setFoundMovieTitle(foundMovie.title);
      setMovieFound(true);
    } else {
      setFoundMovieTitle("");
      setMovieFound(false);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Movie Search</h1>
      <form onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
      {movieFound && (
        <p className="movie-found">Movie found: {foundMovieTitle}</p>
      )}
    </div>
  );
};

export default MovieSearch;
