import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { UserModel } from '../../models';

export namespace UserActions {
  export enum Type {
    ADD_USER= 'ADD_USER',
    DELETE_USER= 'DELETE_USER'
  }

  export const addUser = createAction<UserModel>(Type.ADD_USER);
  export const deleteUser = createAction<UserModel['id']>(Type.DELETE_USER);
}

export type UserActions = Omit<typeof UserActions, 'Type'>;
export const useUserActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = UserActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as UserActions;
};
