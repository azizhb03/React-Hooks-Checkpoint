import { useState } from "react";
const Filter = ({ onAddMovie, onFilterChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleAddMovie = () => {
    if (title && rating) {
      onAddMovie({ title, rating });
      setTitle('');
      setRating('');
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onFilterChange({ title: e.target.value, rating });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilterChange({ title, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={handleRatingChange}
      />
      <button onClick={handleAddMovie}>search</button>
    </div>
  );
};

export default Filter;
