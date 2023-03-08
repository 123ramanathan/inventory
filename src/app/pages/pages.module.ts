import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutModule } from 'src/layout/layout.module';
import { LayoutRoutingModule } from 'src/layout/layout-routing.module';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MaterialsModule } from './material/material.module';
import { MaterialRoutingModule } from './material/material-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    MainComponent,
    AddItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    LayoutRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule
  ]
})
export class PagesModule { }
