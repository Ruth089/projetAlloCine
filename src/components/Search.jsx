import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from 'axios';
import Pages from "./Pages"
import {apiKey} from "./config/config"
import Loader from "react-loader-spinner";

const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Jack+Reacher`

const Search = (props) => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, updateCurrentPage] = useState(1);
  const [moviesPerPage, setMoviePerPage] = useState(4);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const selectedPages = (numPage) => updateCurrentPage(numPage);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }


  useEffect(() => {
    const searchMovies = async () => {
      setLoading(true);
      const response = await axios.get(MOVIE_API_URL)
      .then(response => {
        setMovies(response.data.results);
        setLoading(false);
      });
    }  
    searchMovies();
  }, []);


  const searchFunction = async (e) => {
    e.preventDefault();
    setLoading(true);
   await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`)
          .then(response => {
            setMovies(response.data.results);
            setLoading(false);
            });
    resetInputField();
  }

  return (
    <div className="App-search">
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={searchFunction} type="submit" value="RECHERCHE" />
      </form>
      <div>
      <p className="slogan">Rechercher par ici vos films préférés</p>
      { (loading) 
      ? 
      <Loader type="ThreeDots" color="#f1075d" height="100" width="100" /> 
      :
      <div className="movies">

           { currentMovies.map((currentMovie, index) => (
            <Movie key={`${index}-${currentMovie.title}`} movie={currentMovie} />
          ))}
       
       </div>
       }
       <br/>
      <Pages
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          selectedPages={selectedPages}
        /> 
      </div>
    </div>  
    );
}

export default Search;