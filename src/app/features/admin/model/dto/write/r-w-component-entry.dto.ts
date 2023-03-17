import {UserDto} from "../read/user.dto";
import {ComponentEntryInventoryDto} from "../read/component-entry-inventory.dto";
import {ComponentEntryPicturesDto} from "../read/component-entry-pictures.dto";
import {RWComponentDto} from "./r-w-component.dto";

export class RWComponentEntryDto {
  id!: number;

  observation!: string;
  creationUser!: number;
  creationDate!: string;

  component!: RWComponentDto;
  inventory!: ComponentEntryInventoryDto[];
  pictures!: ComponentEntryPicturesDto[];
}
