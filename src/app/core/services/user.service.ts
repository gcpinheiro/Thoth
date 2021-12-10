import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Users } from '../models/user.model';
import { Products } from '../models/products.model';
import users from '../mocks/user.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  $data = new BehaviorSubject("");

  constructor(private _httpClient: HttpClient) { }

  public getUser(user: any){
    return this._httpClient.get<any>(`http://localhost:8090/user/${user}`)
  }

  public setUser(user: User){
    return this._httpClient.post<User>('http://localhost:8090/user', user)
  }

  public getProdutcs(){
    this.$data.next(JSON.stringify(users));
    console.log("Dados retornados: ", this.$data)
  }

  public setProducts(products: Products){
    return this._httpClient.post<Products>('http://localhost:8090/products', products)
  }
}
