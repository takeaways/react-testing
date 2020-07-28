import React from 'react';
import { useSelector } from 'react-redux';
import { get } from './utils';
import { Link } from 'react-router-dom';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <section>
      <header>restaurants</header>
      <ul>
        {restaurants &&
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <a href={`/restaurants/1`}>{restaurant.name}</a>
            </li>
          ))}
      </ul>
    </section>
  );
}
