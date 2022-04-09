import { ElementType } from "./element-type";
import { RarityType } from "./rarity-type";
import { SetEntity } from "./set-entity";

export class Card {
  cardId: number | undefined;
  cardNumber: number | undefined;
  cardRarity: RarityType | undefined;
  cardElementType: ElementType | undefined;
  cardPic: String | undefined;
  setEntity: SetEntity | undefined;


  constructor(
    cardId?: number , 
    cardNumber?: number , 
    cardRarity?: RarityType , 
    cardElementType?: ElementType , 
    cardPic?: String
) {
    this.cardId = cardId
    this.cardNumber = cardNumber
    this.cardRarity = cardRarity
    this.cardElementType = cardElementType
    this.cardPic = cardPic
  }


}
