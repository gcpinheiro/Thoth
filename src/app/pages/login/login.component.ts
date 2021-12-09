import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  disable = true;
  user = {
    email: '',
    senha: ''
  }

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  public validateForms(){
    if(this.user.email != '' && this.user.senha != ''){
      this.disable = false;
    }
  }


  public get isDisabled(): boolean{
    return this.disable === true? true: false;
  }

  public get classDisabled(): string{
    return this.disable === true? 'acessar-disabled': 'acessar';
  }

  public getUser(){
    this._userService.getUser(this.user)
    localStorage.setItem("user", JSON.stringify(this.user));
  }

}
