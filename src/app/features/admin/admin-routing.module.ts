import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminHomeComponent} from "./components/presentation/admin-home/admin-home.component";
import {ComponentsEntryComponent} from "./components/presentation/components-entry/components-entry.component";

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'component-entry',
    component: ComponentsEntryComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
