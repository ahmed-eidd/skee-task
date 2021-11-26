export const allCategoriesSelector = (state) =>
  state.data.categories.allIds.map((id) => state.data.categories.byId[id]);

export const allMoviesSelector = (state, categoryId) =>
  state.data.categories.byId[categoryId].movies.map(
    (id) => state.data.movies.byId[id]
  );
