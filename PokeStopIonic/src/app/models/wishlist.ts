import { Card } from "./card";
import { Member } from "./member";

export class Wishlist {
  wishlistId: number | undefined;

  member: Member | undefined;
  cards: Card[] | undefined;


  constructor(wishlistId?: number) {
    this.wishlistId = wishlistId
  }


}
