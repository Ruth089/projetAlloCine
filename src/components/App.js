import React, { useState, useEffect } from "react";
import '../scss/App.scss';
import Search from "./Search";
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
            <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <Search/>
                  </>
                )}
              />        
        </div>
      </Router>
  );
};


export default App;