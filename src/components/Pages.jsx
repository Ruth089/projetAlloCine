import React from "react";
import { Button } from "semantic-ui-react";


const Pages = ({  moviesPerPage, totalMovies, selectedPages }) => {
  const nbrOfPages = [];

  for (let i = 1; i <= Math.ceil(totalMovies/ moviesPerPage); i++) {
    nbrOfPages.push(i);
  }
  return (
    <nav className="pagination">
      <Button.Group>
        {nbrOfPages.map((number) => (
          <Button key={number} onClick={() => selectedPages(number)}>

            {number}
            
          </Button>
        ))}
      </Button.Group>
    </nav>
  );
};
export default Pages;