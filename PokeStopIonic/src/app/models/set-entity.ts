import { Card } from "./card";
import { Generation } from "./generation";

export class SetEntity {
  setId: number | undefined;
  setName: string | undefined;
  setDesc: string | undefined;
  setPic: string | undefined;
  releaseDate: Date | undefined;

  cardEntities: Card[] | undefined;
  generation: Generation | undefined;


  constructor(
    setId?: number , 
    setName?: string , 
    setDesc?: string , 
    setPic?: string , 
    releaseDate?: Date 
) {
    this.setId = setId
    this.setName = setName
    this.setDesc = setDesc
    this.setPic = setPic
    this.releaseDate = releaseDate
  }
  
}
