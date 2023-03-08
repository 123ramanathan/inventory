import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MainComponent } from './main/main.component';

MainComponent
const routes: Routes = [
  {path:'',component:MainComponent,
  children: [
    { path: 'additem', component: AddItemComponent },
    { path: 'additem/:data', component: AddItemComponent },
    {path:'',component: ItemListComponent},
    {path:'itemlist',component: ItemListComponent},
  ]
},
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
