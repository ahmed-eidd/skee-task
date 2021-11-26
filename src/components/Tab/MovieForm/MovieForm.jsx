import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieAction } from '../../../store/categories/action';
import { editMovieAction } from '../../../store/data/action';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import classes from './MovieForm.module.css';

const MovieForm = ({ categoryId, edit, movie, onEdit }) => {
  const [name, setName] = useState(edit ? movie.name : '');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (e, setInput) => {
    setInput(e.target.value);
  };
  const onSumbit = () => {
    if (edit) {
      dispatch(editMovieAction(movie.id, name, description));
      onEdit();
      return;
    }

    dispatch(addMovieAction(categoryId, name, description));
  };

  return (
    <div className={classes.MovieForm}>
      <Input
        placeholder='English Name'
        value={name}
        onChange={(e) => onInputChange(e, setName)}
      />
      <Input
        placeholder='English Description'
        value={description}
        onChange={(e) => onInputChange(e, setDescription)}
      />
      <Button onClick={onSumbit}>Create Movie</Button>
    </div>
  );
};

export default MovieForm;
