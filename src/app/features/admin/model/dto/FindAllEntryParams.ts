import {Pagination} from "./Pagination";

export class FindAllEntryParams extends Pagination {
  clientId!: number;
  componentStatus!: number;
}
