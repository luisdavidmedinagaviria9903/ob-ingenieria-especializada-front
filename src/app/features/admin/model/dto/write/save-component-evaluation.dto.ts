import {RWComponentEvaluationDto} from "./r-w-component-evaluation.dto";
import {RWComponentEvaluationInventoryDto} from "./r-w-component-evaluationInventory.dto";

export class SaveComponentEvaluationDto {
  componentEvaluationDto!: RWComponentEvaluationDto;
  componentEvaluationInventory!: RWComponentEvaluationInventoryDto[];
}
