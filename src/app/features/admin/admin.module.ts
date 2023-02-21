import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsEntryComponent} from "./components/presentation/components-entry/components-entry.component";
import { AdminHomeComponent } from './components/presentation/admin-home/admin-home.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [ComponentsEntryComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class AdminModule { }
