import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminHomeComponent} from "./components/presentation/admin-home/admin-home.component";
import {ComponentEntryMainComponent} from "./components/smart/component-entry-main/component-entry-main.component";

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'component-entry',
    component: ComponentEntryMainComponent
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
