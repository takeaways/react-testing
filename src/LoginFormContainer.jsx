import React from 'react';

export default function LoginFormContainer() {
  return (
    <div>
      <form>
        <p>
          <label htmlFor={'login-email'}>Email</label>
          <input type='email' id='login-email' />
        </p>
        <p>
          <label htmlFor={'login-password'}>Password</label>
          <input type='password' id='login-password' />
        </p>
        <p>
          <button type='submit'>Log In</button>
        </p>
      </form>
    </div>
  );
}
