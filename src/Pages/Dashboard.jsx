import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Movie Collection</h1>
      <button className="add-movie-btn" onClick={() => navigate("/add-movie")}>
        Add Movie
      </button>
      <div className="movie-list">
        {/* Example Movies */}
        <MovieCard title="Inception" director="Christopher Nolan" genre="Sci-Fi" releaseYear={2010} synopsis="A thief who enters dreams..." posterUrl="https://example.com/inception.jpg" />
        <MovieCard title="The Dark Knight" director="Christopher Nolan" genre="Action" releaseYear={2008} synopsis="Batman fights the Joker..." posterUrl="https://example.com/darkknight.jpg" />
      </div>
    </div>
  );
};

export default Dashboard;