import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieAction } from '../../../store/data/action';
import { editMovieAction } from '../../../store/data/action';
import Button from '../../Button/Button';
import ErroMessage from '../../ErrorMessage/ErrorMessage';
import Input from '../../Input/Input';
import classes from './MovieForm.module.css';

const MovieForm = ({ categoryId, edit, movie, onEdit }) => {
  const [name, setName] = useState(edit ? movie.name : '');
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (e, setInput) => {
    setInput(e.target.value);
  };
  const onSumbit = () => {
    if (name.length < 3) {
      setError('Add a Movie Name');
      return;
    }
    setError('');
    if (edit) {
      dispatch(editMovieAction(movie.id, name, description));
      onEdit();
      return;
    }
    dispatch(addMovieAction(categoryId, name, description));
    setName('')
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
      <Button onClick={onSumbit}>{edit ? 'Edit Movie' : 'Create Movie'}</Button>
      {error && <ErroMessage message={error} />}
    </div>
  );
};

export default MovieForm;
