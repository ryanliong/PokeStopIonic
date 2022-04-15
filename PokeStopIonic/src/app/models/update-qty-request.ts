export class UpdateQtyRequest {
    orderItemId: number | undefined;
    qty: number | undefined;

    constructor(
        orderItemId?: number,
        qty?: number
    ) {
        this.orderItemId = orderItemId
        this.qty = qty
    }
}
