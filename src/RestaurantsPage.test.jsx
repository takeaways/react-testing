import React from 'react';
import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';
import { useDispatch, useSelector } from 'react-redux';
describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [{ id: 1, name: '서울' }],
        restaurants: [{ id: 1, name: '양천주가' }],
      })
    );
  });

  it('render select buttons about regions and categories', () => {
    useDispatch.mockImplementation(() => dispatch);
    const { getByText } = render(<RestaurantsPage />);

    expect(dispatch).toBeCalled();
  });

  it('renders links of Restauransts', () => {
    useDispatch.mockImplementation(() => dispatch);
    const { container } = render(<RestaurantsPage />);

    expect(container.innerHTML).toContain('<a href="');
  });
});
