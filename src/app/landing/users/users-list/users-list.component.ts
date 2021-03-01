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

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    console.log('1234 :>> ', );
    this.store.select(formUser.getUsersLength()).subscribe(res => {
      if (!res) {
        // api call
        this.store.dispatch(new formUser.LoadUsers());
      }
    });
    this.getUsers();
    this.error$ = this.store.select(formUser.getError());
  }
  getUsers(): void {
    this.users$ = this.store.select(formUser.getUsers());
  }
  onDelete(id: string): void {
    this.store.dispatch(new formUser.DeleteUser(id));
  }

}
