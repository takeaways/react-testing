import React from 'react';

export default function RestaurantsForm() {
  return (
    <form>
      <p>
        <input type='text' placeholder='레스토랑을 입력해주세요.' />
        <button type='submit'>등록</button>
      </p>
    </form>
  );
}
