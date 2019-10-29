import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TshirtListComponent} from './tshirts/tshirt-list/tshirt-list.component';
import {HomeComponent} from './tshirts/home/home.component';
import {TshirtDetailComponent} from './tshirts/tshirt-detail/tshirt-detail.component';
import {TshirtCreateComponent} from './tshirts/tshirt-create/tshirt-create.component';

const routes: Routes = [
  { path: 'tshirts', component: TshirtListComponent },
  { path: 'tshirt-create', component: TshirtCreateComponent },
  { path: '', component: HomeComponent },
  { path: 'tshirts/:id', component: TshirtDetailComponent },


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
