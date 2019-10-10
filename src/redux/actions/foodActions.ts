import Axios from 'axios';
import * as types from './../types';
import * as apiUrls from './../../routes/apiUrl';

export const getFood = (payload: object) => ({ type: types.FOOD_GET, payload });
export const getFoodList = (payload: object) => ({ type: types.FOOD_LIST_FETCH, payload });
export const getCategoryList = (payload: object) => ({ type: types.FOOD_CATEGORY_LIST_FETCH, payload });
export const getFoodBannerList = (payload: object) => ({ type: types.FOOD_BANNER_LIST_FETCH, payload });
export const errorFood = (payload: object) => ({ type: types.FOOD_ERROR, payload });
export const foodLoading = () => ({ type: types.FOOD_LOADING });

export const getFoodFetch = ({ articleId }: any) => async (dispatch: any) => {
  dispatch(foodLoading());
  try {
    const { data: meals } = await Axios.get(apiUrls.URL_FOOD(articleId));
    dispatch(getFood({ food: meals.meals[0] }));
  } catch (error) {
    const { message } = error;
    dispatch(errorFood({ message_error: message }));
  }
};

export const getFoodByCategoryFetch = ({ categoryName }: any) => async (dispatch: any) => {
  dispatch(foodLoading());

  try {
    const { data } = await Axios.get(apiUrls.URL_SEARCH_FOODS_BY_CATEGORY(categoryName));
    dispatch(getFoodList(data));
  } catch (error) {
    const { message } = error;
    dispatch(errorFood({ message_error: message }));
  }
};

export const foodListFetch = () => async (dispatch: any) => {
  dispatch(foodLoading());

  try {
    const { data: meals } = await Axios.get(apiUrls.URL_FOODS);
    dispatch(getFoodList(meals));
  } catch (error) {
    const { message } = error;
    dispatch(errorFood({ message_error: message }));
  }
};

export const searchFoodsFetch = (query: any) => async (dispatch: any) => {
  dispatch(foodLoading());

  try {
    const { data: meals } = await Axios.get(apiUrls.URL_SEARCH_FOODS_BY_NAME(query.query));
    dispatch(getFoodList(meals));
  } catch (error) {
    const { message } = error;
    dispatch(errorFood({ message_error: message }));
  }
};

export const categoriesListFetch = () => async (dispatch: any) => {
  dispatch(foodLoading());

  try {
    const { data: categories } = await Axios.get(apiUrls.URL_CATEGORIES);
    dispatch(getCategoryList(categories));
  } catch (error) {
    const { message } = error;
    dispatch(errorFood({ message_error: message }));
  }
};

export const getFoodRandom = () => async (dispatch: any) => {
  dispatch(foodLoading());

  try {
    const { data: meals } = await Axios.get(apiUrls.URL_FOOD_RANDOM);
    dispatch(getFood(meals));
  } catch (error) {
    const { message } = error;
    dispatch(errorFood({ message_error: message }));
  }
};
