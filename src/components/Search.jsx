import React, { useState, useEffect } from "react";
import { Icon, Image, Pagination, Form, Input} from 'semantic-ui-react'
import { Row, Col, Container } from "react-bootstrap";
import Movie from "./Movie";
import Header from "./Headers";
import axios from 'axios';
import Pages from "./Pages"
import {apiKey} from "./config/config"
import Loader from "react-loader-spinner";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


const Search = (props) => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data,setData]=useState([]);

  
  const [currentPage, updateCurrentPage] = useState(1);
  const [moviesPerPage, setMoviePerPage] = useState(4);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const selectedPages = (numPage) => updateCurrentPage(numPage);
 

  const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
  
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
        setData(response.data)
        setMovies(response.data.results);

        setLoading(false);
      });
    }  

    searchMovies();

  }, []);

  const selectCategoryUpcoming= async () => {

    setLoading(true);

    const response = await axios.get(MOVIE_API_URL)
    .then(response => {
      setData(response.data)
      setMovies(response.data.results);

      setLoading(false);
    });
  
  };

  const selectCategoryPopular = async () => {

    setLoading(true);
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(response => {
        setData(response.data)
        setMovies(response.data.results);

        setLoading(false);
      });
 
  };

  const selectCategoryTop = async () => {

    setLoading(true);

    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    .then(response => {
      setData(response.data)
      setMovies(response.data.results);
    
      setLoading(false);
    
    });
         
  };


  const searchFunction = async (e) => {
    e.preventDefault();

    setLoading(true);
    const response =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`)
    .then(response => {
      setData(response.data)
      setMovies(response.data.results);

      setLoading(false);

    });

    resetInputField();

  };

  return (
    <div className="App-search">

       <Header upcoming={selectCategoryUpcoming} top={selectCategoryTop} popular={selectCategoryPopular}/>
      <Container>

      <Form className="search">      
        <Input
          style={{  width:"50%"}}
          icon={<Icon name='search' inverted circular link  onClick={searchFunction}/>}
          placeholder='Search...'
          onChange={handleSearchInputChanges}
          
        />
        
      </Form>
      <br/><br/><br/>
      <div>
     
      { (loading) 
      ? 
      <Loader type="Circles" color="#f1075d" height="100" width="100" /> 
      :(
        <Row id="row">

          { currentMovies.map((movie, index) => (
            <Movie key={`${index}-${movie.title}`} movie={movie} />
          ))}
          
        </Row>
        
        )}
       <br/>

      <Pages
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          selectedPages={selectedPages}
        /> 
      </div>
      </Container>
    </div>  
    );
}

export default Search;