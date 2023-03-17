import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminHomeComponent} from "./components/presentation/admin-home/admin-home.component";
import {ComponentEntryMainComponent} from "./components/smart/component-entry-main/component-entry-main.component";
import {
  ComponentEntryListComponent
} from "./components/presentation/components-entry/component-entry-list/component-entry-list.component";
import {ComponentListComponent} from "./components/presentation/component-list/component-list.component";
import {
  ComponentEvaluationMainComponent
} from "./components/smart/component-evaluation-main/component-evaluation-main.component";

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'component',
    children: [
      {
        path: 'list-all',
        component: ComponentListComponent,
      },
    ]
  },
  {
    path: 'component-entry',
    children: [
      {
        path: 'create',
        component: ComponentEntryMainComponent,
      },
      {
        path: 'list-all',
        component: ComponentEntryListComponent,
      },
    ]
  },
  {
    path: 'component-evaluation',
    children: [
      {
        path: 'create',
        component: ComponentEvaluationMainComponent,
      }
    ]
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
