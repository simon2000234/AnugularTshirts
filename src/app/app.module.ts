import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './tshirts/shared/navbar/navbar.component';
import { HomeComponent } from './tshirts/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { TshirtListComponent } from './tshirts/tshirt-list/tshirt-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TshirtDetailComponent } from './tshirts/tshirt-detail/tshirt-detail.component';
import { TshirtCreateComponent } from './tshirts/tshirt-create/tshirt-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TshirtUpdateComponent } from './tshirts/tshirt-update/tshirt-update.component';
import { UserListComponent } from './tshirts/user-list/user-list.component';
import { UserDetailComponent } from './tshirts/user-detail/user-detail.component';
import { UserCreateComponent } from './tshirts/user-create/user-create.component';
import { UserUpdateComponent } from './tshirts/user-update/user-update.component';
import {AuthenticationService} from './tshirts/shared/authentication.service';
import {TshirtService} from './tshirts/shared/tshirt.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TshirtListComponent,
    TshirtDetailComponent,
    TshirtCreateComponent,
    TshirtUpdateComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationService, TshirtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
