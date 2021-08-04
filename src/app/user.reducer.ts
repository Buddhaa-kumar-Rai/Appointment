import { Action } from '@ngrx/store';
import { IUser } from './user';


export const userFeatureKey = 'userState';

export interface State {
  users: IUser[],
  error: string
}

export const initialState: State = {
  users:[],
  error:''
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
