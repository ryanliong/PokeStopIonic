import { Product } from "./product";

export class Category {
  categoryId: number | undefined;
  categoryName: string | undefined;
  products: Product[] | undefined;


  constructor(categoryId?: number , categoryName?: string) {
    this.categoryId = categoryId
    this.categoryName = categoryName
  }

}
