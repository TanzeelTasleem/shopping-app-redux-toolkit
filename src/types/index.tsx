export type Product = {
    title: string;
    price: number;
    details: string;
    categoryDefine: string;
    features: string[];
    img: string;
    smallImg : string;
  }

export type payload ={
    title: string;
    price: number;
    details: string;
    categoryDefine: string;
    features: string[];
    img: string;
    smallImg : string;
    quantity : number
}
export type cartState = {
    cart: Array<{
      title: string;
      price: number;
      details: string;
      categoryDefine: string;
      features: string[];
      img: string;
      smallImg: string;
      quantity: number;
    }>;
    total: number;
  }