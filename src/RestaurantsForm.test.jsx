import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RestaurantsForm from './RestaurantsForm';

describe('RestaurantsCreateContainer', () => {
  it('render input and submit button with text "등록" ', () => {
    const { getByText, getByPlaceholderText } = render(<RestaurantsForm />);

    expect(getByText(/등록/)).not.toBeNull();
    expect(getByPlaceholderText(/레스토랑을 입력해주세요./)).not.toBeNull();
  });

  it('when button is clicked restaurants add', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<RestaurantsForm onClick={handleClick} />);

    expect(getByText(/등록/)).not.toBeNull();
    fireEvent.click(getByText(/등록/));
    expect(handleClick).toBeCalled();
  });
});
