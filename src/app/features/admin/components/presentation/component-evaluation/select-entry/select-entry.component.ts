import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {RWComponentEntryDto} from "../../../../model/dto/write/r-w-component-entry.dto";
import {ComponentEntryService} from "../../../../service/component-entry/component-entry.service";
import {FileUtil} from "../../../../../shared/fileUtil";
import {Image} from "../../../../model/interface/Image";

@Component({
  selector: 'app-select-entry',
  templateUrl: './select-entry.component.html',
  styleUrls: ['./select-entry.component.scss']
})
export class SelectEntryComponent implements OnInit{
  @Input()
  form!: FormGroup;
  entries: RWComponentEntryDto[] = [];

  @Input()
  files!: Image[];

  constructor(
              private componentEntryService: ComponentEntryService) {

  }

  ngOnInit(): void {
    this.componentEntryService.getAllComponentEntryByComponentStatus("ENTRY")
      .subscribe((response) => (this.entries = response));
  }

  uploadFile($event: any) {
    if ($event.target){
      console.log($event.target.files)
      Array.from($event.target.files).forEach((file: any) => {
        FileUtil.compressFile(file).then((resultCompressed: any) => {
          FileUtil.convertFileToBase64(resultCompressed).then((convertedToBase64: any) => {
            this.files.push({
              blob: convertedToBase64,
              checked: true,
              name: file.name
            })
          })
        })
      })
    }

  }
}
