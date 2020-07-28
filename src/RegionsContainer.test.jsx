import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

test('egionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      regions: [{ id: 1, name: '서울' }],
    })
  );

  const { getByText } = render(<RegionsContainer />);

  expect(getByText(/서울/)).not.toBeNull();
  fireEvent.click(getByText(/서울/));
  expect(dispatch).toBeCalled();
});
