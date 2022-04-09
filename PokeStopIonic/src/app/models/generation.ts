import { SetEntity } from "./set-entity";

export class Generation {
  generationId: number | undefined;
  generationName: number | undefined;
  generationDesc: number | undefined;
  generationPic: string | undefined;

  setEntities: SetEntity[] | undefined;
  

  constructor(
    generationId?: number , 
    generationName?: number , 
    generationDesc?: number , 
    generationPic?: string
) {
    this.generationId = generationId
    this.generationName = generationName
    this.generationDesc = generationDesc
    this.generationPic = generationPic
  }

}
