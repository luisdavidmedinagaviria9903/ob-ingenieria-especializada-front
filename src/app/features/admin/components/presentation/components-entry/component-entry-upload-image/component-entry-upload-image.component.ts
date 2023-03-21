import {Component, Input} from '@angular/core';
import {FileUtil} from "../../../../../shared/fileUtil";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Image} from "../../../../model/interface/Image";


@Component({
  selector: 'app-component-entry-upload-image',
  templateUrl: './component-entry-upload-image.component.html',
  styleUrls: ['./component-entry-upload-image.component.scss']
})
export class ComponentEntryUploadImageComponent {

  @Input()
  form!: FormGroup;
  @Input()
  files!: Image[];

  constructor(private formBuilder: FormBuilder) {
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

  setSelected(image: Image) {
    this.files.forEach(file => {
      if (file.name == image.name){
        file.checked = !file.checked;
      }
    })
    console.log(this.files)
  }

  buildImageField(){
   return  this.formBuilder.group({
      name: [''],
      value: [''],
      checked: [false]
    })
  }
}

