import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));
  const handleClick = (id) => {
    dispatch(selectRegion(id));
  };
  return (
    <section>
      <header>regions</header>
      <ul>
        {regions ? (
          regions.map((region) => (
            <li key={region.id}>
              <button
                type='button'
                onClick={() => {
                  handleClick(region.id);
                }}
              >
                {region.name}
                {selectedRegion && region.id === selectedRegion.id && '(V)'}
              </button>
            </li>
          ))
        ) : (
          <li>No Regions</li>
        )}
      </ul>
    </section>
  );
}
