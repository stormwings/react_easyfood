import ApiService from '../../helpers/service';
import * as types from './../types';

export const getFood = (payload: object) => ({ type: types.FOOD_GET, payload });
export const getFoodList = (payload: object) => ({ type: types.FOOD_LIST_FETCH, payload });
export const getCategoryList = (payload: object) => ({ type: types.FOOD_CATEGORY_LIST_FETCH, payload });
export const getFoodBannerList = (payload: object) => ({ type: types.FOOD_BANNER_LIST_FETCH, payload });
export const errorFood = (payload: object) => ({ type: 'FOOD_ERROR', payload });

const service: ApiService = new ApiService();

export const getFoodFetch = (values: object) => (dispatch: any) => {
  service.getFood(values).then((result: any) => dispatch(result.success ? getFood(result.data) : errorFood(result)));
};
export const foodListFetch = () => (dispatch: any) => {
  service.getFoods().then(result => dispatch(result.success ? getFoodList(result.data) : errorFood(result)));
};
export const categoriesListFetch = () => (dispatch: any) => {
  service.getCategories().then(result => dispatch(result.success ? getCategoryList(result.data) : errorFood(result)));
};
export const searchFoodsFetch = (values: object) => (dispatch: any) => {
  service.searchFoods(values).then((result: any) => dispatch(result.success ? getFoodList(result.data) : errorFood(result)));
};
