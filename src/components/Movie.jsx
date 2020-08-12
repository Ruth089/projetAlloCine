import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import photo_invalide from "../images/photo_invalide.jpg"

const DEFAULT_PLACEHOLDER_IMAGE = "/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg";

const Movie = ({movie}) => {

  const poster = movie.poster_path === null ? DEFAULT_PLACEHOLDER_IMAGE : movie.poster_path;
  
  return (
    <div className="movie">

      <Card   href="/detailMovie"
        onClick={() => {
          localStorage.setItem(
            "detailsMovies",
            JSON.stringify({
              id: movie.id,
              titre: movie.title,
              dateSortie: movie.release_date,
              description: movie.overview,
              poster:("https://image.tmdb.org/t/p/w300"+ movie.poster_path),
              vote: movie.vote_count,
              genre: movie.genre_ids[0],
            })
          );
        }}
      >

          <Image src={"https://image.tmdb.org/t/p/w300"+ poster} />
          
          <Card.Header>{movie.title}</Card.Header>
        </Card>
  </div>
  );
};


export default Movie;