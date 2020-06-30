/** TodoMVC model definitions **/

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string,
  password: string,
  gender: string,
  Dob: string,
  address: string,
  phone: string
}

export namespace UserModel {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
