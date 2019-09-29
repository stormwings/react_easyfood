import { Countries } from '../enums/Countries';
// import { IUser } from '../interfaces/IUser'; (pending check)

type UserRole = 'client' | 'delivery' | 'operator' | 'admin' | 'merchant' | 'other';

export class User {
  constructor(
    private email: string,
    private password: string,
    private birthDate: Date,
    private firstName: string,
    private lastName: string,
    private country: Countries,
    private allowSuscription: boolean,
    private role?: UserRole,
    private state?: string,
    private zipCode?: string,
    private username?: string,
    private phone?: string,
    private age?: number,
    private _id?: string
  ) {
    this.setId();
    this.setUsername();
    this.setEmail(email);
    this.setPassword(password);
    this.setAge(birthDate);
    this.setName(firstName, lastName);
    this.setCountry(country);
    this.setSuscription(allowSuscription);
    this.setRole();
    this.setState();
    this.setZipCode();
    this.setPhone(phone);
  }

  // GETTERS //

  public getEmail = (): string => this.email;
  public getPassword = (): string => this.password;
  public getBirthDate = (): Date => this.birthDate;
  public getFirstName = (): string => this.firstName;
  public getLastName = (): string => this.lastName;
  public getCountry = (): Countries => this.country;
  public getAllowSuscription = (): boolean => this.allowSuscription;
  public getRole = (): UserRole => this.role || 'other';
  public getState = (): string => this.state || 'Empty';
  public getZipCode = (): string => this.zipCode || 'Empty';
  public getUsername = (): string => this.username || 'Empty';
  public getPhone = (): string => this.phone || 'Empty';
  public getAge = (): number => this.age || 0;
  public getId = (): string => this._id || 'Empty';

  // SETTERS //

  private setId = (): void => {
    this._id = String(new Date().valueOf());
  };

  private setEmail = (email: string): void => {
    if (/^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email');
    }
  };

  private setPassword = (password: string): void => {
    if (this.checkValidPassword(password)) {
      this.password = password;
    } else {
      throw new Error('Invalid password');
    }
  };

  private setAge = (birthDate: Date): void => {
    const age = birthDate.getFullYear() - new Date().getFullYear();

    if (age >= 13) {
      this.age = age;
      this.birthDate = birthDate;
    } else {
      throw new Error('User age must be greater than 13');
    }
  };

  private setName = (firstName: string, lastName: string): void => {
    if (this.checkValidName(firstName) && this.checkValidName(lastName)) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  };

  private setCountry = (country: Countries): void => {
    this.country = country;
  };

  private setSuscription = (allowSuscription: boolean = true): void => {
    this.allowSuscription = allowSuscription;
  };

  private setRole = (role: UserRole = 'client'): void => {
    this.role = role;
  };

  private setState = (state: string = 'default'): void => {
    this.state = state;
  };

  private setZipCode = (zipCode: string = 'default'): void => {
    this.zipCode = zipCode;
  };

  private setPhone = (phone: string = '0000-0000'): void => {
    if (/^(\d+-?)+\d+$/.test(phone)) {
      this.phone = phone;
    } else {
      throw new Error('Invalid phone');
    }
  };

  private setUsername = (): void => {
    this.zipCode = `${this.firstName}${this.lastName}${this._id ? this._id.slice(0, 4) : '123'}`;
  };

  // METHODS //

  public getFullName = (): string => {
    return `${this.firstName} ${this.lastName}`;
  };

  public checkValidName = (name: string): boolean => {
    if (name.length > 0 && /^[a-zA-Z]+$/.test(name)) {
      return true;
    } else {
      throw new Error('Invalid name format');
    }
  };

  public checkValidPassword = (password: string): boolean => {
    // ^ => password will start this way
    // (?=.*[a-z]) => must contain at least 1 lowercase alphabetical character
    // (?=.*[A-Z]) => must contain at least 1 uppercase alphabetical character
    // (?=.*[0-9]) => must contain at least 1 numeric character
    // (?=.[!@#\$%\^&]) => must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    // (?=.{8,}) => must be eight characters or longer

    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
      return true;
    } else {
      throw new Error('Invalid password');
    }
  };
}
