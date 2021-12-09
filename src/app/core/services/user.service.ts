import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  public getUser(user: any){
    return this._httpClient.get<any>(`http://localhost:8090/user/${user}`)
  }

  public setUser(user: User){
    return this._httpClient.post<User>('http://localhost:8090/user', user)
  }

  public getProdutcs(product: Products){
    return this._httpClient.get<Products>(`http://localhost:8090/products/${product}`)
  }

  public setProducts(products: Products){
    return this._httpClient.post<Products>('http://localhost:8090/products', products)
  }
}
