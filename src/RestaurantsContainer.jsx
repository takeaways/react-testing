import React from 'react';
import { useSelector } from 'react-redux';
import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <section>
      <header>restaurants</header>
      <ul>
        {restaurants &&
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>{restaurant}</li>
          ))}
      </ul>
    </section>
  );
}
