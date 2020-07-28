import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders LoginPage', () => {
    const { container } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(container).toHaveTextContent('Log In');
  });
});
