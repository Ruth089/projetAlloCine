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

const DetailMovie = () => {

    const detailMovie = JSON.parse(localStorage.getItem("detailsMovies"));

    return ( <>

        <div className="detailMovie">
            <div>
                <img src={ 
                    detailMovie.poster 
                    } alt=""/>
            </div>
            <div>
                <h2>{detailMovie.titre}</h2>
                <p> {detailMovie.description} </p>
                <p>Sortie du film : {detailMovie.dateSortie} </p>
                <p> Vote count : {detailMovie.vote} </p>
                
            </div>
        </div>
        

    </> );
}
 
export default DetailMovie;