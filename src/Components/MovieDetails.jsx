import { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  ListGroup,
  Spinner,
  Badge,
} from "react-bootstrap/";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);
  const [movieToShow, setMovieToShow] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchMovie = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_BE_URL + "/medias/" + params.movieId
      );
      console.log(response);
      if (response.ok) {
        let rawData = await response.json();
        let data = rawData;
        console.log(data);
        setMovieToShow(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const movieComments = async () => {
    let res = await fetch(
      process.env.REACT_APP_BE_URL + "/medias/" + params.movieId + "/comments"
    );
    console.log(res);
    if (res.ok) {
      let rawData = await res.json();
      let data = rawData;
      console.log(data);
      setComments(data);
    }
  };

  useEffect(() => {
    fetchMovie();
    movieComments();
  }, []);

  return (
    <>
      <Container>
        {movieToShow ? (
          <>
            <Row>
              <Col>
                <h2 className="text-light text-center">
                  Details of {movieToShow.title}
                </h2>

                <Card>
                  <Card.Img
                    variant="top"
                    src={movieToShow.poster}
                    // width={}
                    height={800}
                  />
                  <Card.Body className="background">
                    <Card.Title>
                      {movieToShow.title} {movieToShow.type} -{" "}
                    </Card.Title>
                    <Card.Text>
                      <Badge className="bg-secondary mr-2">
                        {movieToShow.Language}
                      </Badge>
                      <Badge>{movieToShow.Country}</Badge>
                    </Card.Text>
                    <Card.Text>{movieToShow.Actors}</Card.Text>
                    <Card.Text>{movieToShow.Plot}</Card.Text>
                    <Card.Text>{movieToShow.Awards}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <h2 className="ml-5 text-white mb-5">Comments</h2>
                <div className="text-white ml-5">
                  {comments ? (
                    <ListGroup>
                      {comments.map((comment) => {
                        return (
                          <ListGroup key={comment.comment_id}>
                            <p>
                              <strong> Comment:</strong>
                              <br /> {comment.comment}
                              <br />
                              Rating: {comment.rate}
                              <br />
                              by
                              <br />
                              {comment.name}
                            </p>
                          </ListGroup>
                        );
                      })}
                    </ListGroup>
                  ) : (
                    ""
                  )}
                  {(comments === null || comments.length === 0) && (
                    <h4>No comments available</h4>
                  )}
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <Spinner variant="info" animation="border" />
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
