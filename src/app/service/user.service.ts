import { Injectable } from '@angular/core';
import { UserDto } from "../dto/user-dto";


@Injectable({
  providedIn: 'root'
})
export class UserService {
private userTable?:Array<UserDto>;
        isAuthentic = false;

  constructor() { }


getUserData(){
let user1: UserDto = {userName:'crawlogin', password:'admin1', id:1, firstName:'John', lastName:'Reaves'};
let user2: UserDto = {userName:'test', password:'test', id:2, firstName:'Maria', lastName:'Tavares'};
let user3: UserDto = {userName:'crawlogin2', password:'admin123', id:3, firstName:'Joana', lastName:'Trump'};
let user4: UserDto = {userName:'crawlogin3', password:'admin1234', id:4, firstName:'Mike', lastName:'Smith'};

this.userTable = [user1,user2,user3,user4];
return this.userTable;
}

checkAuth(){
  return this.isAuthentic;
}

setIsAuth(){
  this.isAuthentic = true;
}

}
