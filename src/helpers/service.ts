import Axios, { AxiosResponse } from 'axios';
import * as apiUrls from './../routes/apiUrl';
import { ApiResult } from '../models/ApiResult';

class ApiService {
  /**
   * @method that return a'template searched by id'.
   * @returns {ApiResult} that contains results in 'data'.
   */
  public getFoods = async (): Promise<any> => {
    let result: ApiResult = new ApiResult();

    await Axios.get(apiUrls.URL_FOODS).then(({ data }: AxiosResponse) => {
      const { meals }: any = data;
      result.data.foods = meals || undefined;
      result.success = true;
    });

    return result;
  };

  /**
   * @method that return a'template searched by id'.
   * @returns {ApiResult} that contains results in 'data'.
   */
  public getFoodsByCategory = async (values: any): Promise<any> => {
    let result: ApiResult = new ApiResult();
    const { categoryName } = values;

    await Axios.get(apiUrls.URL_SEARCH_FOODS_BY_CATEGORY(categoryName)).then(({ data }: AxiosResponse) => {
      console.log(data);
      const { meals }: any = data;
      result.data.foods = meals || undefined;
      result.success = true;
    });

    return result;
  };

  /**
   * @method that return a'template searched by id'.
   * @returns {ApiResult} that contains results in 'data'.
   */
  public getFood = async (values: any): Promise<any> => {
    let result: ApiResult = new ApiResult();
    const { articleId } = values;

    await Axios.get(apiUrls.URL_FOOD(articleId)).then(({ data }: AxiosResponse) => {
      const { meals }: any = data;
      const meal = meals ? meals[0] : undefined;
      result.data.food = meal;
      result.success = true;
    });

    return result;
  };

  /**
   * @method that return a'template searched by id'.
   * @returns {ApiResult} that contains results in 'data'.
   */
  public getRandomFood = async (): Promise<any> => {
    let result: ApiResult = new ApiResult();

    await Axios.get(apiUrls.URL_FOOD_RANDOM).then(({ data }: AxiosResponse) => {
      const { meals }: any = data;
      const meal = meals ? meals[0] : undefined;
      result.data.food = meal;
      result.success = true;
    });

    return result;
  };

  /**
   * @method that return a'template searched by id'.
   * @returns {ApiResult} that contains results in 'data'.
   */
  public getCategories = async (): Promise<any> => {
    let result: ApiResult = new ApiResult();

    await Axios.get(apiUrls.URL_CATEGORIES).then(({ data }: AxiosResponse) => {
      const { categories }: any = data;
      result.data.categories = categories;
      result.success = true;
    });

    return result;
  };

  /**
   * @method that return a'template searched by id'.
   * @returns {ApiResult} that contains results in 'data'.
   */
  public searchFoods = async (values: any): Promise<any> => {
    let result: ApiResult = new ApiResult();
    const { query } = values;

    await Axios.get(apiUrls.URL_SEARCH_FOODS_BY_NAME(query)).then(({ data }: AxiosResponse) => {
      const { meals }: any = data;
      result.data.foods = meals || [];
      result.success = true;
    });

    return result;
  };
}

export default ApiService;
