import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import LoginFormContainer from './LoginFormContainer';
import { useDispatch, useSelector } from 'react-redux';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        loginFields: {
          email: 'test@test',
          password: '1234',
        },
      })
    );
  });

  it('render input contents', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginFormContainer />
      </MemoryRouter>
    );

    expect(getByLabelText('Email').value).toBe('test@test');
    expect(getByLabelText('Password').value).toBe('1234');
  });

  it('render "Log In" Button ', () => {
    const { getByText } = render(<LoginFormContainer />);
    fireEvent.click(getByText(/Log In/));
    expect(dispatch).toBeCalled();
  });
});
