import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  Modal,
} from "react-bootstrap";
import MovieDetails from "./MovieDetails";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:8080/search?title=${searchTerm}`
      );
      setResults(res.data.Search || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectMovie = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/movie?id=${id}`);
      setSelectedMovie(res.data);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="my-4">
      <h1>OMDB Movie Explorer</h1>
      <Form onSubmit={handleSearch} className="mb-4">
        <Row>
          <Col md={10}>
            <Form.Control
              type="text"
              placeholder="Search movies or series..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row>
        {results.map((movie) => (
          <Col md={3} key={movie.imdbID} className="mb-4">
            <Card
              onClick={() => handleSelectMovie(movie.imdbID)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>Year: {movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && <MovieDetails movie={selectedMovie} />}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;
