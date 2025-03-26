import React from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div className="add-movie-form">
      <h1>Add New Movie</h1>
      <form>
        <label>Title: <input type="text" name="title" required /></label>
        <label>Director: <input type="text" name="director" required /></label>
        <label>Genre:
          <select name="genre" required>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </label>
        <label>Release Year: <input type="number" name="releaseYear" required /></label>
        <label>Synopsis: <textarea name="synopsis" required></textarea></label>
        <label>Poster Image URL: <input type="url" name="posterUrl" required /></label>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;