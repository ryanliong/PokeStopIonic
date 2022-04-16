export class Discount {
  discountId: number | undefined;
  discountCode: string | undefined;
  discountAmount: number | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;


  constructor(
    discountId: number , 
    discountCode: string , 
    discountAmount: number,
    startDate: Date, 
    endDate: Date 
) {
    this.discountId = discountId
    this.discountCode = discountCode
    this.discountAmount = discountAmount
    this.startDate = startDate
    this.endDate = endDate
  }

}
