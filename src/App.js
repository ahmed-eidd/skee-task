import { useState } from 'react';
import './App.css';
import { useDispatch} from 'react-redux';
import {
  addMovieAction,
  addCategoryAction,
  deleteMovieAction,
} from './store/categories/action';
import Button from './components/Button/Button';
import Box from './components/Box/Box';
import Input from './components/Input/Input';
import Tab from './components/Tab/Tab';
import { useSelector } from 'react-redux';

function App() {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.data.categories.allIds.map((id) => state.data.categories.byId[id]))
  const onInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const onCreateCategoryHandler = () => {
    if (categoryName.length < 3) {
      setError('Add Category Name');
      return;
    }

    dispatch(addCategoryAction(categoryName, categoryDescription));
  };

  console.log(categoryName);
  return (
    <div className='App'>
      <Box>
        <h2>Add Category</h2>
        <Button
          onClick={() => {
            dispatch(deleteMovieAction(21281, 655880));
          }}
        >
          click
        </Button>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
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
      </Box>
      <Box>
        <h2>Movie Data</h2>
        {allCategories.map((el) => (
          <Tab
            categoryName={el.name}
            categoryId={el.id}
            key={el.id}
            movies={el.movies}
          />
        ))}
      </Box>
    </div>
  );
}



export default App;
