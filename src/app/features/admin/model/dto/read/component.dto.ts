import {ComponentEntryDto} from "./component-entry.dto";
import {UserDto} from "./user.dto";

export class ComponentDto{
  id!: number;
  type!: number;
  eq!: string;
  status!: number;

  client!: UserDto;
  componentEntry!: ComponentEntryDto;
  entryDate!: string;

}
