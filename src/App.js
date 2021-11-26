import './App.css';
import Box from './components/Box/Box';
import Tab from './components/Tab/Tab';
import { useSelector } from 'react-redux';
import CategoryForm from './components/CategoryForm/CategoryForm';
import { allCategoriesSelector } from './store/data/selector';

function App() {
  const allCategories = useSelector((state) => allCategoriesSelector(state))
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
