import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import LoginFormContainer from './LoginFormContainer';
import { useDispatch } from 'react-redux';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('render input contents', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginFormContainer />
      </MemoryRouter>
    );

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('render "Log In" Button ', () => {
    const { getByText } = render(<LoginFormContainer />);
    fireEvent.click(getByText(/Log In/));
    expect(dispatch).toBeCalled();
  });
});
