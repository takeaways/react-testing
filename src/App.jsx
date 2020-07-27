import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setRestaurants } from './actions';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantsForm from './RestaurantsForm';

import restaurants from '../fixtures/restaurants';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>restaurants</h1>
      <RestaurantsContainer />
      <RestaurantsForm />
    </div>
  );
}
