import {UserDto} from "./user.dto";
import {ComponentDto} from "./component.dto";
import {ComponentEntryInventoryDto} from "./component-entry-inventory.dto";
import {ComponentEntryPicturesDto} from "./component-entry-pictures.dto";

export class ComponentEntryDto{
  id!: number;
  creationUser!: UserDto;
  observation!: string;
  entryDate!: string;
  creationDate!: string;
  inventory!: ComponentEntryInventoryDto[];
  pictures!: ComponentEntryPicturesDto[];
}
