import React from "react";
import { Image } from "react-bootstrap";

function MovieDetails({ movie }) {
  return (
    <div>
      <Image src={movie.Poster} fluid className="mb-3" />
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Ratings:</strong> {movie.imdbRating} / 10
      </p>
      {/* You can add more fields like Genre, Runtime, etc., if needed */}
    </div>
  );
}

export default MovieDetails;
