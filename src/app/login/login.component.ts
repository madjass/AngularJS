import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserDto } from "../dto/user-dto";
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() activeTab  = new EventEmitter();

  userFormControl = new FormControl('', Validators.required);
  pwdFormControl = new FormControl('', Validators.required);
   title = 'Login';
public userName!:string;
public userPwd!:string;
       greetings = "";
userData?:Array<UserDto>;
isAuthorized = false;
user1: UserService;

constructor(user: UserService, private router: Router){
  this.userData = user.getUserData();
  this.user1 = user;
}

authenticateUser(){
  const user = this.userData?.find((user)=> user.userName === this.userFormControl?.value && user.password === this.pwdFormControl?.value );
  if(user !== undefined){
    this.user1.setIsAuth();
    this.activeTab.emit("");
    this.router.navigate(['/main']);
  }else{
    this.greetings = "Please try again!";
  }
}

}
