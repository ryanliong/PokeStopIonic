import { Member } from "./member";
import { Order } from "./order";
import { RefundStatus } from "./refund-status";

export class Refundrequest {
  requestId: number | undefined;
  requestDate: Date | undefined;
  requestDesc: string | undefined;

  requestStatus: RefundStatus | undefined;
  order: Order | undefined;
  member: Member | undefined;


  constructor(
    requestId?: number , 
    requestDate?: Date , 
    requestDesc?: string
) {
    this.requestId = requestId
    this.requestDate = requestDate
    this.requestDesc = requestDesc
  }

}
