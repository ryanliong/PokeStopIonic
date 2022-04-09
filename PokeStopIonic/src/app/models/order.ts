import { Member } from "./member";
import { OrderItem } from "./order-item";
import { OrderStatus } from "./order-status";
import { Payment } from "./payment";
import { Refundrequest } from "./refundrequest";

export class Order {
  orderId: number | undefined;
  orderDate: Date | undefined;
  deliveryAddr: string | undefined;
  deliveryDate: Date | undefined;
  orderStatus: OrderStatus | undefined;

  payment: Payment | undefined;
  orderItems: OrderItem[] | undefined;
  memberEntity: Member | undefined;
  refundRequest: Refundrequest | undefined;


  constructor(
    orderId?: number , 
    orderDate?: Date , 
    deliveryAddr?: string , 
    deliveryDate?: Date , 
    orderStatus?: OrderStatus
) {
    this.orderId = orderId
    this.orderDate = orderDate
    this.deliveryAddr = deliveryAddr
    this.deliveryDate = deliveryDate
    this.orderStatus = orderStatus
  }

}
