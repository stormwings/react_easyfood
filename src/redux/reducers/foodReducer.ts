import * as types from '../types';
// helpers
import { userComments } from '../../helpers/variables';

const INITIAL_STATE = {
  foodList: [] as any,
  categories: [] as any,
  banners: [] as any,
  selectedFood: undefined as any
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.FOOD_GET: {
      const { food } = action.payload;
      return {
        ...state,
        selectedFood: {
          ...food,
          userComments
        }
      };
    }
    case types.FOOD_LIST_FETCH: {
      const { meals } = action.payload;
      return { ...state, foodList: [...meals] };
    }
    case types.FOOD_CATEGORY_LIST_FETCH: {
      const { categories } = action.payload;
      return { ...state, categories: [...categories] };
    }
    case types.FOOD_BANNER_LIST_FETCH: {
      return {
        ...state,
        banners: [
          {
            _id: 1
          }
        ]
      };
    }
    case types.FOOD_ERROR: {
      return { ...state };
    }
    case types.FOOD_LOADING: {
      return { ...state };
    }
    default:
      return state;
  }
}
