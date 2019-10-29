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

@NgModule({
  declarations: [
    AppComponent,
    TshirtComponent,
    NavbarComponent,
    HomeComponent,
    TshirtListComponent,
    TshirtDetailComponent,
    TshirtCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
