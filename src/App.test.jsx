import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      restaurants,
    })
  );

  const { getByText } = render(<App />);
});
