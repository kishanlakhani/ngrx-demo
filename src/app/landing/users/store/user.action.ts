import { User } from './../../../models/user.interface';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
    LoadUsers = '[Users] Load Users',
    LoadUsersSuccess = '[Users] Load Users Success',
    LoadUsersFailure = '[Users] Load Users Failure',

    DeleteUser = '[User] Delete User',
    DeleteUserSuccess = '[User] Delete User Success',
    DeleteUserFailure = '[User] Delete User Failure',

    AddUser = '[User] Add User',
    AddUserSuccess = '[User] Add User Success',
    AddUserFailure = '[User] Add User Failure',


    UpdateUser = '[User] Update User',
    UpdateUserSuccess = '[User] Update User Success',
    UpdateUserFailure = '[User] Update User Failure',

    SelectedUserId = '[User] User Id',
    ClearUserId = '[User] User Id Clear',
    StopLoading = '[User] Loading Stop'

}


export class LoadUsers implements Action {
    readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
    readonly type = UserActionTypes.LoadUsersSuccess;
    constructor(public payload: { data: User[] }) { }
}

export class LoadUsersFailure implements Action {
    readonly type = UserActionTypes.LoadUsersFailure;
    constructor(public payload: { error: string }) { }
}

export class DeleteUser implements Action {
    readonly type = UserActionTypes.DeleteUser;

    constructor(public payload: string) { }
}

export class DeleteUserSuccess implements Action {
    readonly type = UserActionTypes.DeleteUserSuccess;
    constructor(public payload: { data: any }) { }
}

export class DeleteUserFailure implements Action {
    readonly type = UserActionTypes.DeleteUserFailure;
    constructor(public payload: { error: string }) { }
}


export class AddUser implements Action {
    readonly type = UserActionTypes.AddUser;

    constructor(public user: User) { }
}

export class AddUserSuccess implements Action {
    readonly type = UserActionTypes.AddUserSuccess;
    constructor(public user: User) { }
}

export class AddUserFailure implements Action {
    readonly type = UserActionTypes.AddUserFailure;
    constructor(public payload: { error: string }) { }
}


export class UpdateUser implements Action {
    readonly type = UserActionTypes.UpdateUser;

    constructor(public user: User) { }
}

export class UpdateUserSuccess implements Action {
    readonly type = UserActionTypes.UpdateUserSuccess;
    constructor(public user: User) { }
}

export class UpdateUserFailure implements Action {
    readonly type = UserActionTypes.UpdateUserFailure;
    constructor(public payload: { error: string }) { }
}

export class SelectedUserId implements Action {
    readonly type = UserActionTypes.SelectedUserId;
    constructor(public payload: { userId: string }) { }
}

export class ClearUserId implements Action {
    readonly type = UserActionTypes.ClearUserId;
}

export class StopLoading implements Action {
    readonly type = UserActionTypes.StopLoading;
}

export type UserActions =
    LoadUsers |
    LoadUsersSuccess |
    LoadUsersFailure |
    DeleteUser |
    DeleteUserSuccess |
    DeleteUserFailure |
    AddUser |
    AddUserSuccess |
    AddUserFailure |
    UpdateUser |
    UpdateUserSuccess |
    UpdateUserFailure |
    SelectedUserId |
    ClearUserId |
    StopLoading;


