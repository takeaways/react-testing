import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadInitialData } from './actions';

//0. get location and categoiries
//1. select location
//2. select categories
//3. show list of restaurant with location and categories

function RegionsContainer() {
  return null;
}
function CategoriesContainer() {
  return null;
}
function RestaurantsContainer() {
  return null;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
