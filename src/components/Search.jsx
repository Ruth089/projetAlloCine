import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const MOVIE_API_URL = "https://api.themoviedb.org/3/search/movie?api_key=f3f0ea46a33d04f999d9867cd351aa91&query=Jack+Reacher"

const Search = (props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }


  useEffect(() => {
    axios.get(MOVIE_API_URL)
      .then(response => {
        setMovies(response.data.results);
        if (movies) {
          setLoading(false);
        }
        
      });
  }, []);

  
  // .then((response) => {
  //   setdetails(response.data);
  //   console.log(response.data);
  // });

  const searchFunction = (e) => {
    e.preventDefault();

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f3f0ea46a33d04f999d9867cd351aa91&query=${searchValue}`)
          .then(response => {
            setMovies(response.data.results);
            });
    resetInputField();
  }

  

  
  return (
    <div>
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={searchFunction} type="submit" value="SEARCH" />
      </form>
      <div>
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">

          { movies.map((movie, index) => (
            <Movie key={`${index}-${movie.title}`} movie={movie} />
          ))}
        {/* {
        loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.title}`} movie={movie} />
          ))
        )} */}
      </div>
      </div>
    </div>  
    );
}

export default Search;