import { LoadUsers, UpdateUser, AddUser } from './../store/user.action';
import { User } from './../../../models/user.interface';
import { getSingleUser } from './../store/user.selector';
import { select, Store } from '@ngrx/store';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as formUser from './../store/index';

@Component({
  selector: 'app-users-add-edit',
  templateUrl: './users-add-edit.component.html',
  styleUrls: ['./users-add-edit.component.scss']
})
export class UsersAddEditComponent implements OnInit {

  id: string;
  userForm: FormGroup;
  selectedUser: User = {
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''
  };
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param.get('id')) {
        this.id = param.get('id');
        this.store.pipe(select(formUser.getSingleUser(this.id))).subscribe(
          (data: User) => {
            this.selectedUser = { ...data };
            this.buildFrom();
          }
        );
      } else {
        this.buildFrom();
      }
    });
  }

  private buildFrom(): void {
    this.userForm = new FormGroup({
      first_name: new FormControl(this.selectedUser.first_name),
      last_name: new FormControl(this.selectedUser.last_name),
      email: new FormControl(this.selectedUser.email),
      avatar: new FormControl(this.selectedUser.avatar)
    });
  }

  public onSubmit(): void {
    if (this.id) {
      const user = { ...this.userForm.value, id: this.id };
      this.store.dispatch(new formUser.UpdateUser(user));
    } else {
      this.store.dispatch(new formUser.AddUser(this.userForm.value));
    }
    this.router.navigateByUrl('/users');
  }


}
