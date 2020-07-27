import React from 'react';

export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants &&
        restaurants.map((rastaurant) => (
          <li key={rastaurant.id}>{rastaurant.name}</li>
        ))}
    </ul>
  );
}
