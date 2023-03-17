import {UserDto} from "../read/user.dto";
import {ComponentEntryInventoryDto} from "../read/component-entry-inventory.dto";
import {ComponentEntryPicturesDto} from "../read/component-entry-pictures.dto";
import {WComponentDto} from "./w-component.dto";

export class WComponentEntryDto{
  id!: number;

  observation!: string;
  creationUser!: number;
  creationDate!: string;

  component!: WComponentDto;
  inventory!: ComponentEntryInventoryDto[];
  pictures!: ComponentEntryPicturesDto[];
}
