import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { getByText } = render(<NotFoundPage />);

  expect(getByText(/Page Not Found/)).not.toBeNull();
});
