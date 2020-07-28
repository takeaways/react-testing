import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router-dom';

test('HomePage', () => {
  const { getByText } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  expect(getByText(/HomePage/)).not.toBeNull();
});
