import React from 'react';
import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';
import { useDispatch, useSelector } from 'react-redux';
describe('RestaurantsPage', () => {
  it('render RestaurantsPage somthing with', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [{ id: 1, name: '서울' }],
      })
    );

    const { getByText } = render(<RestaurantsPage />);

    expect(dispatch).toBeCalled();
  });
});
