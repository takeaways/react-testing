import React from 'react';

export default function LoginForm({ onChange, onSubmit }) {
  function handleChange(event) {
    const {
      target: { name, value },
    } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <p>
        <label htmlFor={'login-email'}>Email</label>
        <input
          name='email'
          type='email'
          id='login-email'
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor={'login-password'}>Password</label>
        <input
          name='password'
          type='password'
          id='login-password'
          onChange={handleChange}
        />
      </p>
      <p>
        <button type='button' onClick={onSubmit}>
          Log In
        </button>
      </p>
    </div>
  );
}
