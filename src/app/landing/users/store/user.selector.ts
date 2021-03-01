import { State } from './user.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const userFeatureState = createFeatureSelector<State>('users');


export const getUsers = () => createSelector(
  userFeatureState,
  state => {
    return state.users;
  }
);

export const getSingleUser = (id: string) => createSelector(
  userFeatureState,
  state => {
    return state.users.find(user => user.id == id);
  }
);

export const getUsersLength = () => createSelector(
  userFeatureState,
  state => state.users.length
);


export const getError = () => createSelector(
  userFeatureState,
  state => state.error
);
