import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from './pages/material/material.module';
import { MaterialRoutingModule } from './pages/material/material-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    PagesRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule,
    MaterialRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
