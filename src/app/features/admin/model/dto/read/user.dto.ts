import {RolDto} from "./rol.dto";

export class UserDto {
  id!: number;
  email!: string;
  firstName!: string;
  secondName!: string;
  document!: string;
  documentType!: number;
  phone!: number;
  rol!: RolDto;
}
