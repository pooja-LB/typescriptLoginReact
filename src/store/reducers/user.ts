import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { UserActions } from '../actions'
import { UserModel } from '../../models/UserModel';

const initialState: RootState.UserState = [
  {
    id: 1,
    firstName: 'Pooja',
    lastName: 'lakki',
    email: 'pooja@gmail.com',
    password: 'test',
    gender: 'Female',
    Dob: '',
    address: '',
    phone: ''
  }
];

export const userReducer = handleActions<RootState.UserState, UserModel>(
  {
    [UserActions.Type.ADD_USER]: (state, action) => {
      if (action.payload && action.payload.lastName) {
        return [
          {
            id: state.reduce((max, user) => Math.max(user.id || 1, max), 0) + 1,
            firstName: '',
            lastName: action.payload.lastName,
            email : '',
            password: '',
            gender: '',
            Dob: '',
            address: '',
            phone: ''
          },
          ...state
        ];
      }
      return state;
    },
    [UserActions.Type.DELETE_USER]: (state, action) => {
      return state.filter((user) => user.id !== (action.payload as any));
    }
  },
  initialState
);
