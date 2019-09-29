/**
 * Base Urls
 *
 * base | {string} | set the base url depending on the environment
 */
const BASE_URL: string = 'https://www.themealdb.com/api/json/v1/1/';

/**
 * Authentication
 *
 * social network login | POST | login a user with his google or facebook account
 * social network register | POST | register a user with his google or facebook account
 */
// export const SIGNIN_FACEBOOK = `${BASE_URL}rest-auth/facebook/`; (PENDING)
// export const SIGNIN_GOOGLE = `${BASE_URL}rest-auth/google/`; (PENDING)

/**
 * Foods
 *
 * foods | GET | get foods
 * food | GET | search food with an expecific id
 * categories | GET | get food's categories
 * search foods by category | GET | get foods by category
 */
export const URL_FOODS: string = `${BASE_URL}latest.php`;
export const URL_FOOD = (id: number): string => `${BASE_URL}lookup.php?i=${id}`;
export const URL_FOOD_RANDOM: string = `${BASE_URL}random.php`;
export const URL_SEARCH_FOODS_BY_NAME = (name: string): string => `${BASE_URL}search.php?s=${name}`;
export const URL_SEARCH_FOODS_BY_CATEGORY = (category: string): string => `${BASE_URL}filter.php?c=${category}`;

/**
 * Categories
 *
 * categories | GET | get food's categories
 */
export const URL_CATEGORIES: string = `${BASE_URL}categories.php`;
