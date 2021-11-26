import moviesData from '../movies-data.json';

const newData = () => {
  const categoriesData = moviesData.categories;
  let categoryObj = {
    byId: {},
    allIds: [],
  };
  let movieObj = {
    byId: {},
    allIds: [],
  };
  for (let categoryData of categoriesData) {
    categoryObj = {
      byId: {
        ...categoryObj.byId,
        [categoryData.id]: {
          name: categoryData.name,
          id: categoryData.id,
          movies: categoryData.movies.map((el) => el.id),
        },
      },
      allIds: [categoryData.id, ...categoryObj.allIds],
    };
    for (let movie in categoryData.movies) {
      movieObj = {
        byId: {
          ...movieObj.byId,
          [categoryData.movies[movie].id]: {
            name: categoryData.movies[movie].name,
            id: categoryData.movies[movie].id,
          },
        },
        allIds: [...movieObj.allIds, categoryData.movies[movie].id],
      };
    }
  }
  return { categoryObj, movieObj };
};

export const { categoryObj, movieObj } = newData();
