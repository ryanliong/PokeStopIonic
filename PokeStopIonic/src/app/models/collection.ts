import { Card } from "./card";
import { Member } from "./member";

export class Collection {
  collectionId: number | undefined;  
  member: Member | undefined;
  cards: Card[] | undefined;


  constructor(collectionId?: number ) {
    this.collectionId = collectionId
  }


}
