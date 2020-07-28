const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
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
};

function defaultReducer(state) {
  return state;
}
export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
