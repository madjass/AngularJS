import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  userPost: string[] = [];
  isActive:boolean;

constructor(){
  this.isActive = true;
}


displayPost(event: string){
this.userPost.push(event);
}

getPosts(){
  if(this.userPost !== undefined){
  this.userPost;
}

}

}
