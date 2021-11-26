import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategoryAction } from '../../store/data/action';
import Box from '../Box/Box';
import Button from '../Button/Button';
import ErroMessage from '../ErrorMessage/ErrorMessage';
import Input from '../Input/Input';
import classes from './CategoryForm.module.css';

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const onCreateCategoryHandler = () => {
    if (categoryName.length < 3) {
      setError('Add Category Name');
      return;
    }

    setError('');
    setCategoryName('')
    dispatch(addCategoryAction(categoryName, categoryDescription));
  };
  return (
    <Box>
      <h2>Add Category</h2>
      <div className={classes.FormContainer} >
        <Input
          placeholder='English Name'
          value={categoryName}
          onChange={(e) => onInputChange(e, setCategoryName)}
        />
        <Input
          elementType='textarea'
          placeholder='English Name'
          value={categoryDescription}
          onChange={(e) => onInputChange(e, setCategoryDescription)}
        />
        <Button onClick={onCreateCategoryHandler}>Create Category</Button>
      </div>
      {error && <ErroMessage message={error} />}
    </Box>
  );
};

export default CategoryForm;
