
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';



export default function App() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filterMovies = () => {
    return movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        movie.rating >= filter.rating
      );
    });
  };

  return (
    <Container>
      <h1 className="text-center">My Movie App</h1>
      <Row>
        <Col xs={12} md={6}>
          <Filter onAddMovie={handleAddMovie} onFilterChange={setFilter} />
        </Col>
        <Col xs={12} md={6}>
          <MovieList movies={filterMovies()} />
        </Col>
      </Row>
    </Container>
  );
}


