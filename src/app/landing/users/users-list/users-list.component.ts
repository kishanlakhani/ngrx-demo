import { User } from './../../../models/user.interface';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as formUser from './../store/index';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  error$: Observable<string>;
  selectedUserId: string;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    // this.store.select(formUser.getUsersLength()).subscribe(res => {
    //   if (!res) {
    //     // api call
    //   }
    // });
    // this.store.dispatch(new formUser.LoadUsers());
    this.getUsers();
    this.error$ = this.store.select(formUser.getError());

    this.store.select(formUser.getSelectedUserId()).subscribe(id => {
      this.selectedUserId = id;
    });
  }
  getUsers(): void {
    this.users$ = this.store.select(formUser.getUsers());
  }
  onDelete(id: string): void {
    this.store.dispatch(new formUser.DeleteUser(id));
  }
  onDetailShow(id: string): void {
    if (this.selectedUserId == id) {
      this.store.dispatch(new formUser.ClearUserId());
    } else {
      this.store.dispatch(new formUser.SelectedUserId({ userId: id }));
    }
  }

}
