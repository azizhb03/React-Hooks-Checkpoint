
import Card from 'react-bootstrap/Card';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>Rating: {movie.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
