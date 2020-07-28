import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [{ id: 1, name: '서울' }],
      })
    );
  });

  context('with path /', () => {
    it('redners HomePage', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      expect(getByText(/HomePage/)).not.toBeNull();
    });
  });

  context('with path /about', () => {
    it('redners HomePage', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      );
      expect(getByText(/About.../)).not.toBeNull();
    });
  });

  context('with path /restaurants', () => {
    it('redners HomePage', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      );
      expect(getByText(/서울/)).not.toBeNull();
    });
  });
});
