import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './components/presentation/admin-home/admin-home.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ComponentEntryMainComponent } from './components/smart/component-entry-main/component-entry-main.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import { ComponentEntryGeneralInfoComponent } from './components/presentation/components-entry/component-entry-general-info/component-entry-general-info.component';
import { ComponentEntryUploadImageComponent } from './components/presentation/components-entry/component-entry-upload-image/component-entry-upload-image.component';
import {MatListModule} from "@angular/material/list";
import { ComponentEntryObservationsComponent } from './components/presentation/components-entry/component-entry-observations/component-entry-observations.component';
import { ComponentEntryPreviewComponent } from './components/presentation/components-entry/component-entry-preview/component-entry-preview.component';
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import { ComponentEntryListComponent } from './components/presentation/components-entry/component-entry-list/component-entry-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { ComponentListComponent } from './components/presentation/component-list/component-list.component';
import { ComponentEvaluationMainComponent } from './components/smart/component-evaluation-main/component-evaluation-main.component';
import { SelectEntryComponent } from './components/presentation/component-evaluation/select-entry/select-entry.component';
import { EvaluationMechanicalElectricalComponent } from './components/presentation/component-evaluation/evaluation-mechanical-electrical/evaluation-mechanical-electrical.component';
import { EvaluationInventoryComponent } from './components/presentation/component-evaluation/evaluation-inventory/evaluation-inventory.component';
import { EvaluationObservationsComponent } from './components/presentation/component-evaluation/evaluation-observations/evaluation-observations.component';
import { EvaluationSelectImagesComponent } from './components/presentation/component-evaluation/evaluation-select-images/evaluation-select-images.component';
import { EvaluationPickSpecImageComponent } from './components/presentation/component-evaluation/evaluation-pick-spec-image/evaluation-pick-spec-image.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [AdminHomeComponent, ComponentEntryMainComponent, ComponentEntryGeneralInfoComponent,
    ComponentEntryUploadImageComponent, ComponentEntryObservationsComponent, ComponentEntryPreviewComponent,
    ComponentEntryListComponent, ComponentListComponent, ComponentEvaluationMainComponent, SelectEntryComponent,
    EvaluationMechanicalElectricalComponent, EvaluationInventoryComponent, EvaluationObservationsComponent, EvaluationSelectImagesComponent, EvaluationPickSpecImageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatButtonModule,
    MatListModule,
    NgxMaterialTimepickerModule,
    NgbCarousel,
    NgbSlide,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ]
})
export class AdminModule { }
