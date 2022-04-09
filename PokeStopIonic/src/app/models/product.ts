import { Category } from "./category";

export class Product {
  productId: number | undefined;
  productName: string | undefined;
  productDesc: string | undefined;
  productPrice: number | undefined;
  qtyInStock: number | undefined;
  productPic: string | undefined;
  category: Category | undefined;

  constructor(
    productId?: number , 
    productName?: string , 
    productDesc?: string , 
    productPrice?: number , 
    qtyInStock?: number , 
    productPic?: string
) {
    this.productId = productId
    this.productName = productName
    this.productDesc = productDesc
    this.productPrice = productPrice
    this.qtyInStock = qtyInStock
    this.productPic = productPic
  }

}
