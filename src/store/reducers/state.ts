import { UserModel } from '../../models';

export interface RootState {
  user: RootState.UserState;
  router?: any;
}

export namespace RootState {
  export type UserState = UserModel[];
}
