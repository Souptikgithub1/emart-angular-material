import {Brand} from "./brand";
import {Category} from "./category";
export interface Product {
  _id : string;
  productName : string;
  mrp : number;
  sellingRate : number;

  image1 : string;
  image2 : string;
  image3 : string;
  image4 : string;
  image5 : string;

  brand : Brand;
  category : Category;
  verticalId: number;
}
