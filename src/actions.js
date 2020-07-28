import { fetchCategories, fetchRegions } from '';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}
export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
