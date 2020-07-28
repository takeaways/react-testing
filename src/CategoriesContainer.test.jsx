import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

test('CategoriesConteiner ', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      categories: [{ id: 1, name: '한식' }],
    })
  );

  const { getByText } = render(<CategoriesContainer />);

  expect(getByText(/한식/)).not.toBeNull();
  fireEvent.click(getByText(/한식/));
  expect(dispatch).toBeCalled();
});
