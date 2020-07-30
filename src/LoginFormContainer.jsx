import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import { requestLogin, changeLoginField } from './actions';
import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleSubmit = useCallback(() => {
    dispatch(requestLogin());
  }, [dispatch]);

  const handleChange = useCallback(
    ({ name, value }) => {
      dispatch(changeLoginField({ name, value }));
    },
    [dispatch]
  );

  return (
    <>
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <p>{accessToken}</p>
    </>
  );
}
