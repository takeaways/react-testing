import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

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

export function selectRegion(id) {
  return {
    type: 'selectRegion',
    payload: { id },
  };
}

export function selectCategory(id) {
  return {
    type: 'selectCategory',
    payload: { id },
  };
}

export function setRestauratns(restaurants) {
  return {
    type: 'setRestauratns',
    payload: { restaurants },
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

export function loadRestaurants() {
  console.log('loadRestaurants');
  return async (dispatch, getState) => {
    const { selectedRegion, selectedCategory } = getState();

    if (!selectedRegion || !selectedCategory) {
      return;
    }
    const restaurants = await fetchRestaurants({
      regionName: selectedRegion.name,
      categoryId: selectedCategory.id,
    });

    console.log(restaurants);
    dispatch(setRestauratns(restaurants));
  };
}
