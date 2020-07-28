import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import { useDispatch, useSelector } from 'react-redux';
describe('App', () => {
  it('render App somthing with', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [{ id: 1, name: '서울' }],
      })
    );

    const { getByText } = render(<App />);

    expect(dispatch).toBeCalled();
  });
});
