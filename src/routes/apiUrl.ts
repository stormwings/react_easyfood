/**
 * Base Urls
 *
 * base | {string} | set the base url depending on the environment
 */
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

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
export const URL_FOODS = `${BASE_URL}latest.php`;
// export const URL_FOOD = (id: any) => `${BASE_URL}templates/${id}/`; (disabled)
export const URL_CATEGORIES = `${BASE_URL}categories.php`;

// Search meal by name
// # search.php?s=Arrabiata
// List all meals by first letter
// # search.php?f=a
// Lookup full meal details by id
// # lookup.php?i=52772
// Lookup a random meal
// # random.php
// List all Categories, Area, Ingredients
// # list.php?c=list
// # list.php?a=list
// # list.php?i=list
// Filter by main ingredient
// # filter.php?i=chicken_breast
// Filter by multi-ingredient (only available to $2+ Patreon supporters)
// # filter.php?i=chicken_breast,garlic,salt
// Filter by Category
// # filter.php?c=Seafood
// Filter by Area
// # filter.php?a=Canadian

//  Ingredient Images
// https://www.themealdb.com/images/ingredients/Lime.png
// https://www.themealdb.com/images/ingredients/Lime-Small.png
