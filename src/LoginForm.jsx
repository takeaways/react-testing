import React from 'react';

function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

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
          value={email}
          id='login-email'
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor={'login-password'}>Password</label>
        <input
          name='password'
          type='password'
          value={password}
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

export default React.memo(LoginForm);
