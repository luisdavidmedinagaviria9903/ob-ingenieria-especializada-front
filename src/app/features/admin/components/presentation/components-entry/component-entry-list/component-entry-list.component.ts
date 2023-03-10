import {Component, OnInit} from '@angular/core';
import {ComponentEntryDto} from "../../../../model/dto/component-entry.dto";
import {ComponentEntryService} from "../../../../service/component-entry.service";
import {CONTACT_SUPPORT, show_popup, TITLE_ERROR} from "../../../../../shared/popup-alert";

@Component({
  selector: 'app-component-entry-list',
  templateUrl: './component-entry-list.component.html',
  styleUrls: ['./component-entry-list.component.scss']
})
export class ComponentEntryListComponent implements OnInit{

  displayedColumns: string[] = ['eq','component_type', 'client', 'entry_date', 'status', 'details'];
  dataSource: ComponentEntryDto[] = [];

  constructor(private componentEntryService: ComponentEntryService) {
  }

  ngOnInit(): void {
    this.componentEntryService.getAllComponentEntry().subscribe({
      next: value => {
        if (value && value.items){
          this.dataSource = value.items;
        }
      }, error: () => {
        show_popup(TITLE_ERROR, CONTACT_SUPPORT);
      }
    })
  }

}
