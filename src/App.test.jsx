import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import { useDispatch } from 'react-redux';
describe('App', () => {
  it('render App somthing with', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render(<App />);

    expect(dispatch).toBeCalled();
  });
});
