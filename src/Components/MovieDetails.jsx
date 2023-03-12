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
        "https://long-plum-chimpanzee-tie.cyclic.app/medias" + params.movieId
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
      "https://striveschool-api.herokuapp.com/api/comments/" + params.movieId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzUzNDYyODcsImV4cCI6MTY3NjU1NTg4N30.oaVIhmVyxOUdFP1mjGKJ2ncKPQY6Fz8qEyWjoCTuLcU",
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
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
                  Details of {movieToShow.Title}
                </h2>

                <Card>
                  <Card.Img
                    variant="top"
                    src={movieToShow.Poster}
                    // width={}
                    height={800}
                  />
                  <Card.Body className="background">
                    <Card.Title>
                      {movieToShow.Title} {movieToShow.Type} -{" "}
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
                          <ListGroup key={comment._id}>
                            <p>
                              <strong> Comment:</strong> {comment.comment}
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
