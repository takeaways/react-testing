import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

describe('RestaurantsContainer', () => {
  it('render Restaurants list', () => {
    useSelector.mockImplementation((selector) =>
      selector({
        restaurants,
      })
    );

    const { getByText } = render(<RestaurantsContainer />);

    expect(getByText(/김밥제국/)).not.toBeNull();
  });
});
