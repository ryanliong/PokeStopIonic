export class Discount {
  discountId: number | undefined;
  discountCode: string | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;


  constructor(
    discountId: number , 
    discountCode: string , 
    startDate: Date , 
    endDate: Date 
) {
    this.discountId = discountId
    this.discountCode = discountCode
    this.startDate = startDate
    this.endDate = endDate
  }

}
