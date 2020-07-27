import React from 'react';
import { render } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

describe('RestaurantsCreateContainer', () => {
  it('render input and submit button with text "등록" ', () => {
    const { getByText } = render(<RestaurantsCreateContainer />);

    expect(getByText(/등록/)).not.toBeNull();
  });
});
