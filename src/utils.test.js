import { get } from './utils';

test('get', () => {
  const state = {
    name: 'gi',
  };
  const f = get('name');
  expect(f(state)).toBe('gi');
});
