import {Component, OnInit, ViewChild} from '@angular/core';
import {ComponentEntryDto} from "../../../../model/dto/component-entry.dto";
import {ComponentEntryService} from "../../../../service/component-entry.service";
import {CONTACT_SUPPORT, show_popup, TITLE_ERROR} from "../../../../../shared/popup-alert";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {FindAllEntryParams} from "../../../../model/dto/FindAllEntryParams";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MiscTypeDto} from "../../../../model/dto/miscType.dto";
import {MiscTypeService} from "../../../../service/misc-type.service";
import {MiscTypeEnum} from "../../../../model/misc-type-enum";

@Component({
  selector: 'app-component-entry-list',
  templateUrl: './component-entry-list.component.html',
  styleUrls: ['./component-entry-list.component.scss']
})
export class ComponentEntryListComponent implements OnInit{

  displayedColumns: string[] = ['eq','component_type', 'client', 'entry_date', 'status', 'details'];
  dataSource: ComponentEntryDto[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  form!: FormGroup;

  resultsLength = 0;
  componentStatus: MiscTypeDto[] = [];

  constructor(private componentEntryService: ComponentEntryService,
              private formBuilder: FormBuilder,
              private miscTypeService: MiscTypeService) {
    this.form = this.formBuilder.group({
      state: [''],
      client_id: ['']
    })
  }

  ngOnInit(): void {
    let params = new FindAllEntryParams();
    params.sort ="entryDate";
    this.sort.active = "entry_date";
    this.sort.direction = "desc";
    this.callData(params);
    this.miscTypeService.findByCode(MiscTypeEnum.COMPONENT_STATUS)
      .subscribe(result => (this.componentStatus = result));
  }

  callData(params: any){
    this.componentEntryService.getAllComponentEntry(params).subscribe({
      next: value => {
        if (value && value.items){
          this.dataSource = value.items;
          this.resultsLength = value.totalItems;
        }
      }, error: () => {
        show_popup(TITLE_ERROR, CONTACT_SUPPORT);
      }
    })
  }

  pagination($event: PageEvent) {
    let params = new FindAllEntryParams();

    params.page = $event.pageIndex;
    params.size = $event.pageSize;
    params.sort = this.sort.active;
    params.order = this.sort.direction;

    //TODO: State, clientId params left
    this.callData(params);
  }

  sortChange($event: Sort) {
    let params = new FindAllEntryParams();

    params.page = this.paginator.pageIndex;
    params.size = this.paginator.pageSize;
    params.sort = $event.active;
    params.order = $event.direction;

    //TODO: State, clientId params left
    this.callData(params);
  }
}
