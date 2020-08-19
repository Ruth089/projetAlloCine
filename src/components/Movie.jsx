import React , { useState }from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Header, Button, Modal, Image, Card ,Icon} from "semantic-ui-react";
import photo_invalide from "../images/photo_invalide.jpg"

const Movie = ({movie}) => {

  const [state, setState] = useState({ modal_open: false });
  const handleOpen = () => setState({ modal_open: true });
  const handleClose = () => setState({ modal_open: false });
  
  return (
    
    <Col sm="3" className="" key={movie.id}>
      <Modal className="modalmovie"
        style={{marginLeft: "250px", marginTop:"100px"}}
        closeIcon
        id="modal"
        open={state.modal_open}
        onClose={handleClose}
        trigger={
          <Card  onClick={handleOpen}>
            <Image
              style={{ }}
              fluid
              label={{
                as: "a",
                color: "red",
                corner: "right",
                detail: movie.vote_average,
                circular: true,
              }}

              src={
                movie.poster_path
                  ? "https://image.tmdb.org/t/p/w300/" + movie.poster_path
                  : photo_invalide
              }
              style={{heigth:"5px"}}
            />
            
              <Card.Content>

                <Card.Meta>
                <Header>{movie.title}</Header>
                  <span className='date'>Sortie du film en {movie.release_date
                          ? new Date(movie.release_date).getFullYear()
                          : "-"}</span>
                </Card.Meta>
              </Card.Content>
          </Card>
        }
      >
      
        <Modal.Content image>         
            <Image 
              size='medium'
              fluid
              src={
                  movie.poster_path
                    ? "https://image.tmdb.org/t/p/w300/" + movie.poster_path
                    : "https://semantic-ui.com/images/wireframe/image.png"
              }
              style={{width:"40%"}}
            
            />
        
         
          <Modal.Description>
          <Button color='black' floated="right" onClick={handleClose}>
            Close
          </Button>
          <Header>{movie.title}</Header>
            <p> {movie.overview}</p>
           
          </Modal.Description>
        </Modal.Content>
       
      </Modal>
    </Col>
  );
};


export default Movie;