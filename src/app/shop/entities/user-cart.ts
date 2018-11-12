import {User} from "./user";
import {Product} from "./product";

export class UserCart{
    id: number;
    user: User;
    product: Product;
    timeStamp: string;
}