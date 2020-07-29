import reducer from './reducer';
import {
  setRegions,
  setCategories,
  selectRegion,
  selectCategory,
  setRestauratns,
  changeLoginField,
  setAccessToken,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };
      const regions = [{ id: 1, name: '서울' }];
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('change categories', () => {
      const initialState = {
        categories: [],
      };
      const categories = [{ id: 1, name: '분식' }];
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('select Regions', () => {
    it('show selected mark', () => {
      const initialState = {
        regions: [{ id: 1, name: '서울' }],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));
      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('select Category', () => {
    it('show Category mark', () => {
      const initialState = {
        categories: [{ id: 1, name: '한식' }],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));
      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('setRestaurants', () => {
    it('change restaurants', () => {
      const initialState = {
        restaurants: [],
      };
      const restaurants = [{ id: 1, name: '마법사주방' }];

      const state = reducer(initialState, setRestauratns(restaurants));
      expect(state.restaurants).toEqual([
        {
          id: 1,
          name: '마법사주방',
        },
      ]);
    });
  });

  describe('changeLoginFields', () => {
    it('change changeLoginFields', () => {
      const initialState = {
        loginFields: {
          email: '',
          password: '',
        },
      };

      const state = reducer(
        initialState,
        changeLoginField({ name: 'email', value: 'test' })
      );

      expect(state.loginFields.email).toBe('test');
    });
  });

  describe('setAccessToken', () => {
    it('change AccessToken', () => {
      const initialState = {
        accessToken: '',
      };
      const state = reducer(initialState, setAccessToken('TOKEN'));
      expect(state.accessToken).toBe('TOKEN');
    });
  });
});
