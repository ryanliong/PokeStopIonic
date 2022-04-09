import { Discount } from "./discount";
import { Member } from "./member";
import { OrderItem } from "./order-item";

export class Cart {
  cartId: number | undefined;
  cartAmt: number | undefined;
  discount: Discount | undefined;
  orderItems: OrderItem[] | undefined;
  member: Member | undefined;


  constructor(
    cartId?: number , 
    cartAmt?: number
) {
    this.cartId = cartId
    this.cartAmt = cartAmt
  }

  
}
