import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
  postLogin,
} from './services/api';
import { saveItem } from './services/storage';

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

export function changeLoginField({ name, value }) {
  return {
    type: 'changeLoginField',
    payload: {
      name,
      value,
    },
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const {
      loginFields: { email, password },
    } = getState();
    try {
      const accessToken = await postLogin({ email, password });
      saveItem('accessToken', accessToken);
      dispatch(setAccessToken(accessToken));
    } catch (error) {
      //error 처리
      console.error('---> ', error);
    }
  };
}
