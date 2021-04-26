import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as formUser from './store/index';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new formUser.LoadUsers());
    this.isLoading$ = this.store.select(formUser.getLoadingStatus());
  }

}
