import { Countries } from '../enums/Countries';

export interface IUser {
  email: string;
  password: string;
  birthDate: string;
  firstName: string;
  lastName: string;
  country: Countries;
  state: string;
  username: string;
}
