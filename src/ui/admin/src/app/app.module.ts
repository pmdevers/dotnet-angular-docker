import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { PmdeversModule } from '@pmdevers/pmdevers.module';
import { PmdeversSharedModule } from '@pmdevers/shared.module';

import { pmdeversConfig } from './config' 

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PmdeversModule.forRoot(pmdeversConfig),
    PmdeversSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
