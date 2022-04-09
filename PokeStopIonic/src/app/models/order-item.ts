import { Cart } from "./cart";
import { Order } from "./order";
import { Product } from "./product";

export class OrderItem {
  orderItemId: number | undefined;
  qty: number | undefined;
  
  order: Order | undefined;
  product: Product | undefined;
  cart: Cart | undefined;


  constructor(
    orderItemId?: number , 
    qty?: number
  ) {
    this.orderItemId = orderItemId
    this.qty = qty
  }

}
