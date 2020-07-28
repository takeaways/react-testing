import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('render input contents', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginFormContainer />
      </MemoryRouter>
    );

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
