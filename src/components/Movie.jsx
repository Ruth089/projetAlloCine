import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg";

const Movie = ({movie}) => {

  const poster = movie.poster_path === null ? DEFAULT_PLACEHOLDER_IMAGE : movie.poster_path;
  
  return (
    <div className="movie">
    <h2>{movie.title}</h2>
    <div>
    <a href={"/detailMovie/"+movie.id}>
      <img
        width="200"
        alt={`The movie titled: ${movie.title}`}
        src={"https://image.tmdb.org/t/p/w300"+ poster}
      />
    </a>
    </div>
    <br/>
  <p>{movie.overview}</p>
    <p>({movie.release_date})</p>
  </div>
  );
};


export default Movie;