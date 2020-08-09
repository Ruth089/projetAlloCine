import React, { useState, useEffect } from "react";
import '../css/App.css';
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
        <div className="App">
          <Header text="HOOKED" />
          <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search/>
                </>
              )}
            />
          <Route path="/detailMovie/:id" component={DetailMovie}/>          
        </div>
      </Router>
  );
};


export default App;