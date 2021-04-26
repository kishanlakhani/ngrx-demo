import { User } from './../../../models/user.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as formUser from './../store/index';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetails$: Observable<User>;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.userDetails$ = this.store.select(formUser.getSingleUser());
  }

}
