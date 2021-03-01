import { User } from './../../../models/user.interface';
import { UserActions, UserActionTypes } from './user.action';
import { State } from './user.state';
import { initialState } from './user.state';

export function reducer(state = initialState, action: UserActions): State {
    switch (action.type) {

        case UserActionTypes.LoadUsersSuccess:
            return {
                ...state,
                users: action.payload.data
            };

        case UserActionTypes.LoadUsersFailure:
            return {
                ...state,
                error: action.payload.error
            };

        case UserActionTypes.DeleteUserSuccess:
            const updateUser = state.users.filter((e: User) => e.id !== action.payload.data);
            return {
                ...state,
                users: updateUser
            };

        case UserActionTypes.DeleteUserFailure:
            return {
                ...state,
                error: action.payload.error
            };

        case UserActionTypes.AddUserSuccess:
            const addUser = { ...action.user };
            const UpdateUsers = [...state.users, addUser];
            return {
                ...state,
                users: UpdateUsers
            };

        case UserActionTypes.AddUserFailure:
            return {
                ...state,
                error: action.payload.error
            };

        case UserActionTypes.UpdateUserSuccess:
            const users = state.users;
            const updateUsers = users.map(user => user.id == action.user.id ? action.user : user);
            return {
                ...state,
                users: updateUsers
            };

        case UserActionTypes.UpdateUserFailure:
            return {
                ...state,
                error: action.payload.error
            };

        default:
            return state;
    }
}
