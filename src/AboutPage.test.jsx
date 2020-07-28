import React from 'react';

import AboutPage from './AboutPage';
import { render } from '@testing-library/react';

test('AboutPage', () => {
  const { getByText } = render(<AboutPage />);

  expect(getByText(/About.../)).not.toBeNull();
});
