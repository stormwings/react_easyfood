import * as types from '../types';

const INITIAL_STATE = {
  foodList: [] as any,
  categories: [] as any,
  banners: [] as any,
  loading: false,
  activeCategory: 0,
  searchQuery: '',
  request_status: {
    message_result: null,
    result: false
  } as any
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.FOOD_LIST_FETCH: {
      const { foods } = action.payload;
      return { ...state, foodList: [...foods] };
    }
    case types.FOOD_CATEGORY_LIST_FETCH: {
      const { categories } = action.payload;
      return { ...state, categories: [...categories] };
    }
    case types.FOOD_BANNER_LIST_FETCH: {
      // const { banners } = action.payload;
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
