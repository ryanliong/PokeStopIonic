import { Order } from "./order";
import { PaymentStatus } from "./payment-status";

export class Payment {
  paymentId: number | undefined;
  paymentAmt: number | undefined;
  paymentDate: Date | undefined;

  paymentStatus: PaymentStatus | undefined;
  order: Order | undefined;


  constructor(
    paymentId?: number , 
    paymentAmt?: number , 
    paymentDate?: Date
) {
    this.paymentId = paymentId
    this.paymentAmt = paymentAmt
    this.paymentDate = paymentDate
  }

}
