import { ElementType } from "./element-type";
import { RarityType } from "./rarity-type";
import { SetEntity } from "./set-entity";

export class Card {
  cardId: number | undefined;
  cardName: string | undefined;
  cardNumber: number | undefined;
  cardRarity: RarityType | undefined;
  cardElementType: ElementType | undefined;
  cardPic: String | undefined;
  setEntity: SetEntity | undefined;
  gotten: boolean | undefined;
  wished: boolean | undefined;


  constructor(
    cardId?: number , 
    cardName?: string,
    cardNumber?: number , 
    cardRarity?: RarityType , 
    cardElementType?: ElementType , 
    cardPic?: String
) {
    this.cardId = cardId
    this.cardName = cardName
    this.cardNumber = cardNumber
    this.cardRarity = cardRarity
    this.cardElementType = cardElementType
    this.cardPic = cardPic
  }


}
