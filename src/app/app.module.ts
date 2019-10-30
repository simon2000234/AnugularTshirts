import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TshirtComponent } from './tshirts/tshirt/tshirt.component';
import { NavbarComponent } from './tshirts/shared/navbar/navbar.component';
import { HomeComponent } from './tshirts/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { TshirtListComponent } from './tshirts/tshirt-list/tshirt-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TshirtDetailComponent } from './tshirts/tshirt-detail/tshirt-detail.component';
import { TshirtCreateComponent } from './tshirts/tshirt-create/tshirt-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TshirtUpdateComponent } from './tshirts/tshirt-update/tshirt-update.component';
@NgModule({
  declarations: [
    AppComponent,
    TshirtComponent,
    NavbarComponent,
    HomeComponent,
    TshirtListComponent,
    TshirtDetailComponent,
    TshirtCreateComponent,
    TshirtUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
