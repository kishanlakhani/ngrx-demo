import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEffects } from './store/user.effect';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddEditComponent } from './users-add-edit/users-add-edit.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent

      },
      {
        path: 'add',
        component: UsersAddEditComponent
      },
      {
        path: 'edit/:id',
        component: UsersAddEditComponent
      },
      {
        path: 'show',
        component: UserDetailsComponent
      }
    ]
  },
];

@NgModule({
  declarations: [UsersListComponent, UsersAddEditComponent, UserDetailsComponent, UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UsersModule { }
