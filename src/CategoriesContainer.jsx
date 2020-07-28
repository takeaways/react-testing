import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));
  const handleClick = (id) => {
    dispatch(selectCategory(id));
  };
  return (
    <section>
      <header>categories</header>
      <ul>
        {categories ? (
          categories.map((category) => (
            <li key={category.id}>
              <button
                type='button'
                onClick={() => {
                  handleClick(category.id);
                }}
              >
                {category.name}
                {selectedCategory &&
                  category.id === selectedCategory.id &&
                  '(V)'}
              </button>
            </li>
          ))
        ) : (
          <li>No Categories</li>
        )}
      </ul>
    </section>
  );
}
