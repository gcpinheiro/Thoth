import { Products } from "./products.model";

export class User{
  email?: string;
  senha?: string;
  products?: Products;
}

export class Users{
  user?: User[];
}
