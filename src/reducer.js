const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {
    email: '',
    password: '',
  },
};

const reducers = {
  setRegions(state, action) {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  },
  setCategories(state, action) {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  },
  selectRegion(state, action) {
    const { id } = action.payload;
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find((region) => region.id === id),
    };
  },
  selectCategory(state, action) {
    const { id } = action.payload;
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find((category) => category.id === id),
    };
  },
  setRestauratns(state, action) {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  },
};

function defaultReducer(state) {
  return state;
}
export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
