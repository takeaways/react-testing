import React from 'react';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(requestLogin());
  }

  return <LoginForm onSubmit={handleSubmit} />;
}
