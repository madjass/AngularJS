import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-crawl',
  templateUrl: './crawl.component.html',
  styleUrl: './crawl.component.css'
})
export class CrawlComponent implements OnInit {
  isMainActive =false;
  isLoginActive =true;
  isSearchActive =false;
  isAcctActive =false;
  tabActive: string| undefined;
  user: UserService;

  constructor(private router: Router,user: UserService ){
    this.user = user;
  }

  ngOnInit(): void{
    this.router.events.subscribe((resp) : any => {
        let tabUrl = resp as NavigationEnd;
        this.setTabActive(tabUrl?.url);
    });
  }

  main(){
    if(this.user.checkAuth()){
    this.router.navigate(['/main']);
      }
  }

  search(){
    if(this.user.checkAuth()){
    this.router.navigate(['/search']);
  }
  }

  account(){
    if(this.user.checkAuth()){
    this.router.navigate(['/account']);
  }
  }

  login(){
    if(!this.user.checkAuth()){
    this.router.navigate(['/login']);
  }
  }

  setTabActive(tab: string | undefined){
    if((tab !== undefined && tab !== "/")  && !(this.tabActive === tab)){
      console.log(tab);
    this.tabActive = tab; 
    this.isMainActive = (tab?.includes("main") ? true : false) ;
    this.isLoginActive = (tab?.includes("login") ? true : false) ;
    this.isSearchActive = (tab?.includes("search") ? true : false) ;
    this.isAcctActive = (tab?.includes("account") ? true : false) ;
    console.log(this.isAcctActive);
      }
  }



}
