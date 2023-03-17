import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RWComponentEntryDto} from "../../../../model/dto/write/r-w-component-entry.dto";
import {ComponentEntryService} from "../../../../service/component-entry/component-entry.service";

@Component({
  selector: 'app-select-entry',
  templateUrl: './select-entry.component.html',
  styleUrls: ['./select-entry.component.scss']
})
export class SelectEntryComponent implements OnInit{
  @Input()
  form!: FormGroup;
  entries: RWComponentEntryDto[] = [];

  constructor(
              private componentEntryService: ComponentEntryService) {

  }

  ngOnInit(): void {
    this.componentEntryService.getAllComponentEntryByComponentStatus("ENTRY")
      .subscribe((response) => (this.entries = response));
  }

}
