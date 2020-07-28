import React from 'react';
import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';
import { useDispatch, useSelector } from 'react-redux';

test('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      restaurants: [{ id: 1, name: '마법사주방' }],
    })
  );

  const { getByText } = render(<RestaurantsContainer />);

  expect(getByText(/마법사주방/)).not.toBeNull();
});
