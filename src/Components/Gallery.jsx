import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/esm/Spinner";
import Alert from "react-bootstrap/esm/Alert";

const Gallery = (props) => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIserror] = useState(false);

  const fetchMovies = async () => {
    try {
      let response = await fetch(process.env.VERCEL_URL + "/medias");
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMovies(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIserror(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIserror(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container fluid>
      {isLoading && ( // isLoading is true or false
        <Spinner animation="border" variant="success" />
      )}
      {isError && <Alert variant="danger">Aww snap, we got an error!😨</Alert>}

      <Col sm={12} md={12} lg={12}>
        <h5 className="text-light mt-5">{props.genre}</h5>
      </Col>

      <Row>
        {movies
          ? movies.slice(0, 6).map((res) => {
              return (
                <Col
                  sm={5}
                  md={3}
                  lg={3}
                  xl={2}
                  key={res.imdbID}
                  className="p-0"
                  onClick={() => {
                    navigate(`/medias/${res.imdbID}`);
                  }}
                >
                  <img className="img-fluid" src={res.poster} alt={res.title} />
                </Col>
              );
            })
          : null}
      </Row>
    </Container>
  );
};

export default Gallery;
