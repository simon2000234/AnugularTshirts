import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TshirtListComponent} from './tshirts/tshirt-list/tshirt-list.component';
import {HomeComponent} from './tshirts/home/home.component';
import {TshirtDetailComponent} from './tshirts/tshirt-detail/tshirt-detail.component';
import {TshirtCreateComponent} from './tshirts/tshirt-create/tshirt-create.component';
import {TshirtUpdateComponent} from './tshirts/tshirt-update/tshirt-update.component';
import {UserListComponent} from './tshirts/user-list/user-list.component';
import {UserDetailComponent} from './tshirts/user-detail/user-detail.component';
import {UserCreateComponent} from './tshirts/user-create/user-create.component';
import {UserUpdateComponent} from './tshirts/user-update/user-update.component';
import {AuthGuard} from './tshirts/shared/guards/auth.guard';

const routes: Routes = [
  { path: 'tshirts', component: TshirtListComponent, canActivate: [AuthGuard] },
  { path: 'tshirt-create', component: TshirtCreateComponent,  canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'tshirts/:id', component: TshirtDetailComponent,  canActivate: [AuthGuard] },
  { path: 'tshirt-update/:id', component: TshirtUpdateComponent,  canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent},
  { path: 'users/:id', component: UserDetailComponent},
  { path: 'user-create', component: UserCreateComponent},
  { path: 'user-update/:id', component: UserUpdateComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
