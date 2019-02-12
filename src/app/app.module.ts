<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import { ArenaComponent } from './arena/arena.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    LoginComponent
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 1952e5cd8c52369ce0437287027499e69ccb4be5
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
=======
    HttpModule
>>>>>>> 1952e5cd8c52369ce0437287027499e69ccb4be5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
