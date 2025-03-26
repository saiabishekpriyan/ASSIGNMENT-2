import React from "react";

const MovieCard = ({ title, director, genre, releaseYear, synopsis, posterUrl }) => {
  // Ensure all props are available before rendering
  if (!title || !director) {
    return <p>Error: Movie data is missing.</p>;
  }

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <h2>{title}</h2>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Release Year:</strong> {releaseYear}</p>
      <p>{synopsis}</p>
    </div>
  );
};

export default MovieCard;