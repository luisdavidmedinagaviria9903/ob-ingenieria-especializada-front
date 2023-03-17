import {ComponentTypeDto} from "./componentType.dto";
import {ComponentEntryInventorySpecsDto} from "./component-entry-inventory-specs.dto";

export class ComponentEntryTypeSpecsDto{
  id!: number;
  componentType!: ComponentTypeDto;
  componentSpec!: ComponentEntryInventorySpecsDto;
  required!: boolean;
  creationDate!: string;
}
