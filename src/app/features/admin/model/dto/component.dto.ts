import {ComponentEntryDto} from "./component-entry.dto";

export class ComponentDto{
  id!: number;
  type!: number;
  eq!: string;
  status!: number;
  componentEntry!: ComponentEntryDto;
  creationDate!: string;
  creationUser!: string;
}
