import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import AbountPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import { loadItem } from './services/storage';
import { useDispatch } from 'react-redux';
import { setAccessToken } from './actions';
export default function App() {
  const dispatch = useDispatch();
  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <>
      <nav>
        <header>Navigation</header>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/restaurants'>Restaurants</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AbountPage} />
        <Route exact path='/restaurants' component={RestaurantsPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
