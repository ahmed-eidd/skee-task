import './App.css';
import Box from './components/Box/Box';
import Tab from './components/Tab/Tab';
import { useSelector } from 'react-redux';
import CategoryForm from './components/CategoryForm/CategoryForm';

function App() {
  const allCategories = useSelector((state) =>
    state.data.categories.allIds.map((id) => state.data.categories.byId[id])
  );
  return (
    <div className='App'>
      <CategoryForm />
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
