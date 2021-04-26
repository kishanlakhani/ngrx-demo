import { User } from './../../../models/user.interface';
import { UserActions, UserActionTypes, UpdateUser } from './user.action';
import { State } from './user.state';
import { initialState } from './user.state';

export function reducer(state = initialState, action: UserActions): State {
    switch (action.type) {

        case UserActionTypes.LoadUsers:
            return {
                ...state,
                isLoading: true
            };

        case UserActionTypes.LoadUsersSuccess:
            return {
                ...state,
                users: action.payload.data,
                isLoading: false
            };

        case UserActionTypes.LoadUsersFailure:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };


        case UserActionTypes.DeleteUser:
            return {
                ...state,
                isLoading: true
            };


        case UserActionTypes.DeleteUserSuccess:
            const updateUser = state.users.filter((e: User) => e.id !== action.payload.data);
            return {
                ...state,
                users: updateUser,
                isLoading: false
            };

        case UserActionTypes.DeleteUserFailure:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };

        case UserActionTypes.AddUser:
            return {
                ...state,
                isLoading: true
            };


        case UserActionTypes.AddUserSuccess:
            const addUser = { ...action.user };
            const UpdateUsers = [...state.users, addUser];
            return {
                ...state,
                users: UpdateUsers,
                isLoading: false
            };

        case UserActionTypes.AddUserFailure:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };

        case UserActionTypes.UpdateUser:
            return {
                ...state,
                isLoading: true
            };


        case UserActionTypes.UpdateUserSuccess:
            const users = state.users;
            const updateUsers = users.map(user => user.id == action.user.id ? action.user : user);
            return {
                ...state,
                users: updateUsers,
                isLoading: false
            };

        case UserActionTypes.UpdateUserFailure:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };

        case UserActionTypes.SelectedUserId:
            return {
                ...state,
                selectedUserId: action.payload.userId,
                isLoading: false
            };

        case UserActionTypes.ClearUserId:
            return {
                ...state,
                selectedUserId: '',
                isLoading: false
            };

        case UserActionTypes.StopLoading:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}
