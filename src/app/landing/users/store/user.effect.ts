import { User } from './../../../models/user.interface';
import { UserService } from './../../../services/user.service';
import { Action, Store } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as userAction from './user.action';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.UserActionTypes.LoadUsers),
    mergeMap((action) => {
      return this.userService.getUsers().pipe(
        map((res: User[]) => (new userAction.LoadUsersSuccess({ data: res['data'] }))),
        catchError((err: string) => of(new userAction.LoadUsersFailure({ error: err })))
      );

    })
  );

  @Effect()
  deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.UserActionTypes.DeleteUser),
    map((action: userAction.DeleteUser) => action.payload),
    mergeMap(
      (id: string) => this.userService.deleteUser(id).pipe(
        map((res: {}) => (new userAction.DeleteUserSuccess({ data: id }))),
        catchError((err: string) => of(new userAction.DeleteUserFailure({ error: err })))
      )
    )
  );

  @Effect()
  addUser$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.UserActionTypes.AddUser),
    map((action: userAction.AddUser) => action.user),
    mergeMap(
      (user: User) => this.userService.addUser(user).pipe(
        map((res: User) => (new userAction.AddUserSuccess(res))),
        catchError((err: string) => of(new userAction.DeleteUserFailure({ error: err })))
      )
    )
  );

  @Effect()
  updateUser$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.UserActionTypes.UpdateUser),
    map((action: userAction.UpdateUser) => action.user),
    mergeMap(
      (user: User) => this.userService.updateUser(user).pipe(
        map((res: User) => (new userAction.UpdateUserSuccess(res))),
        catchError((err: string) => of(new userAction.UpdateUserFailure({ error: err })))
      )
    )
  );
}
