import Axios, { AxiosResponse } from 'axios';
import * as apiUrls from './../routes/apiUrl';

class ApiService {
  /**
   * @method that return a'template searched by id'.
   * @returns {ApiResult} that contains results in 'data'.
   */
  public getFoods = async (): Promise<any> => {
    let result: any = {
      data: [],
      success: false,
      message_result: ''
    };

    await Axios.get(apiUrls.URL_FOODS).then(({ data }: AxiosResponse) => {
      const { meals }: any = data;
      result.data.foods = meals;
      result.success = true;
    });

    return result;
  };

  /**
   * @method that return a'template searched by id'.
   * @returns {ApiResult} that contains results in 'data'.
   */
  public getCategories = async (): Promise<any> => {
    let result: any = {
      data: [],
      success: false,
      message_result: ''
    };

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
  public searchFoods = async (): Promise<any> => {
    let result: any = {
      data: [],
      success: false,
      message_result: ''
    };

    await Axios.get(apiUrls.URL_SEARCH_FOODS_BY_NAME('Arrabiata')).then(({ data }: AxiosResponse) => {
      const { meals }: any = data;
      result.data.foods = meals;
      result.success = true;
    });

    return result;
  };
}

export default ApiService;
