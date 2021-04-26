import { State } from './user.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const userFeatureState = createFeatureSelector<State>('users');


export const getUsers = () => createSelector(
  userFeatureState,
  state => {
    return state.users;
  }
);

export const getSingleUser = (id = '') => createSelector(
  userFeatureState,
  state => {
    const userId = id || state.selectedUserId;
    return state.users.find(user => user.id == userId);
  }
);

export const getSelectedUserId = () => createSelector(
  userFeatureState,
  state => state.selectedUserId
);

export const getUsersLength = () => createSelector(
  userFeatureState,
  state => state.users.length
);

export const isUsersLoaded = () => createSelector(
  userFeatureState,
  state => state.users.length > 0 ? true : false
);

export const getError = () => createSelector(
  userFeatureState,
  state => state.error
);

export const getLoadingStatus = () => createSelector(
  userFeatureState,
  state => state.isLoading
);
