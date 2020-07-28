import React from 'react';
import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginForm() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(requestLogin());
  }
  return (
    <div>
      <p>
        <label htmlFor={'login-email'}>Email</label>
        <input type='email' id='login-email' />
      </p>
      <p>
        <label htmlFor={'login-password'}>Password</label>
        <input type='password' id='login-password' />
      </p>
      <p>
        <button type='button' onClick={handleClick}>
          Log In
        </button>
      </p>
    </div>
  );
}
