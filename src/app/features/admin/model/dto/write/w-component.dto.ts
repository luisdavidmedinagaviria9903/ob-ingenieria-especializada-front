import {UserDto} from "../read/user.dto";

export class WComponentDto{
  id!: number;
  type!: number;
  eq!: string;
  status!: number;

  client!: number;

  entryDate!: string;
  creationDate!: string;
}
