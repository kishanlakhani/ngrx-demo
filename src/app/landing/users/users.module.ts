import { UserEffects } from './store/user.effect';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddEditComponent } from './users-add-edit/users-add-edit.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
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
  }
];

@NgModule({
  declarations: [UsersListComponent, UsersAddEditComponent],
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
