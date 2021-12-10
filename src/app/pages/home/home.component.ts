import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/core/models/products.model';
import { User, Users } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products?: any;

  constructor(private _userSerivce: UserService) { }

  ngOnInit(): void {
    this._userSerivce.getProdutcs();
    this._userSerivce.$data.subscribe((data) => {
      this.products = data;
      console.log(this.products)
    })

  }




}
