import './App.css';
import { useDispatch } from 'react-redux';
import { addMovieAction } from './store/categories/action';
import Button from './components/Button/Button';
import Box from './components/Box/Box';

function App() {
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <Box>
        <h1>hello world</h1>
        <Button
          color='red'
          onClick={() => {
            dispatch(addMovieAction({ movie: 'test', id: '80877' }));
          }}
        >
          create
        </Button>
      </Box>
    </div>
  );
}

export default App;
