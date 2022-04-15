export class UpdateCollection {

  cardId: number | undefined;
  memberId: number | undefined;


  constructor(cardId: number , memberId: number ) {
    this.cardId = cardId
    this.memberId = memberId
  }

}
