import React, { useState, useEffect } from "react";
import '../scss/App.scss';
import Header from "./Headers";
import Search from "./Search";
import DetailMovie from "./DetailMovie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const App = () => {
 
    
    return (
      <Router>
        <div className="App" >
          <Header text="ALLO CINE" />
          <div className="container">
            
            <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <Search/>
                  </>
                )}
              />
            <Route path="/detailMovie" component={DetailMovie}/>          
          </div>
        </div>
      </Router>
  );
};


export default App;