import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import axios from 'axios';


  // https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`

// https://api.themoviedb.org/3/search/keyword?api_key=###&query=cat



const DetailMovie = () => {
    
    let { id } = useParams();
    const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=f3f0ea46a33d04f999d9867cd351aa91`

    const [detailMovies, setDetailMovies] = useState([])

    useEffect(() => {
        axios.get(MOVIE_API_URL)
          .then(response => {
            setDetailMovies(response.data.results);
         
          });
    }, []);

    return ( <>

        <p>Bonjour ruth</p>

    </> );
}
 
export default DetailMovie;