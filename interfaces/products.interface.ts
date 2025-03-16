export interface ProductTables {
  name: string;
  soldQuantity: number;
  remainingQuantity: number;
  price: string;
}

export interface LowQuantityStock {
  name: string;
  quantity: string;
  thumbnail: string;
}
