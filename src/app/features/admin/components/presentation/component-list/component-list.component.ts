import {Component, ViewChild} from '@angular/core';
import {ComponentDto} from "../../../model/dto/component.dto";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MiscTypeDto} from "../../../model/dto/miscType.dto";
import {UserDto} from "../../../model/dto/user.dto";
import {ComponentService} from "../../../service/component/component.service";
import {MiscTypeService} from "../../../service/misc-type.service";
import {UserService} from "../../../service/user.service";
import {MatDialog} from "@angular/material/dialog";
import {FindAllEntryParams} from "../../../model/dto/FindAllEntryParams";
import {MiscTypeEnum} from "../../../model/misc-type-enum";
import {CONTACT_SUPPORT, show_popup, TITLE_ERROR} from "../../../../shared/popup-alert";
import {
  ComponentEntryPreviewComponent
} from "../components-entry/component-entry-preview/component-entry-preview.component";
import {Image} from "../../smart/component-entry-main/component-entry-main.component";

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})
export class ComponentListComponent {
  displayedColumns: string[] = ['eq','component_type', 'client', 'entry_date', 'status', 'details'];
  dataSource: ComponentDto[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  form!: FormGroup;

  resultsLength = 0;
  componentStatus: MiscTypeDto[] = [];
  clients: UserDto[] = [];

  constructor(private componentService: ComponentService,
              private formBuilder: FormBuilder,
              private miscTypeService: MiscTypeService,
              private userService: UserService,
              private matDialog: MatDialog) {
    this.form = this.formBuilder.group({
      state: [null],
      client: [null]
    })
  }

  ngOnInit(): void {
    let params = new FindAllEntryParams();
    params.sort ="creationDate";
    this.sort.active = "creationDate";
    this.sort.direction = "desc";
    this.callData(params);
    this.miscTypeService.findByCode(MiscTypeEnum.COMPONENT_STATUS)
      .subscribe(result => (this.componentStatus = result));
    this.userService.getAllClients().subscribe(result => (this.clients = result));
  }

  callData(params: any){
    this.componentService.getAllComponents(params).subscribe({
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

  searchItem() {
    let params = new FindAllEntryParams();

    params.page = this.paginator.pageIndex;
    params.size = this.paginator.pageSize;

    if (this.clientIdField?.value){
      params.clientId = this.clientIdField?.value;
    }
    if (this.stateField?.value){
      params.componentStatus = this.stateField?.value;
    }



    //TODO: State, clientId params left
    this.callData(params);
  }

  get clientIdField(){
    return this.form.get('client');
  }
  get stateField(){
    return this.form.get('state');
  }

  reset() {
    let params = new FindAllEntryParams();
    params.sort ="creationDate";
    this.sort.active = "creationDate";
    this.sort.direction = "desc";
    this.form.reset();
    this.callData(params);
  }

  showPreview(element: ComponentDto) {
    let dialog = this.matDialog.open(ComponentEntryPreviewComponent,  {
      width: "90%",
      height: "100%"
    });
    let files : Image[] = [];
    element.componentEntry.pictures.forEach(picture => {
      files.push({
        blob: picture.url,
        checked: true,
        name: picture.name
      })
    })

    dialog.componentInstance.component = element;
    dialog.componentInstance.files = files;
  }

}
