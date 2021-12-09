import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
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
    return this.disable == true? true: false;
  }

  public get classDisabled(): string{
    return this.disable == true? 'enviar-disabled': 'enviar';
  }

  public setUser(user: User){
    this._userService.setUser(user);
  }

}
