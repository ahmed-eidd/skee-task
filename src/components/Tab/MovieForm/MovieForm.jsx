import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieAction } from '../../../store/categories/action';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import classes from './MovieForm.module.css'

const MovieForm = ({categoryId}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (e, setInput) => {
    setInput(e.target.value);
  };
  const onSumbit = () => {
    dispatch(addMovieAction(categoryId,name,description));
  }
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
