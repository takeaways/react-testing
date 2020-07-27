import React from 'react';
import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import restaurants from '../fixtures/restaurants';
describe('Restaurants', () => {
  const { getByText } = render(<Restaurants restaurants={restaurants} />);
});
