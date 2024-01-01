import { Component } from '@angular/core';
import { PostDto } from "../dto/post-dto";
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  userPost: PostDto[] = [];
  isActive:boolean;
  post?: PostDto;
  postSrv: PostService;


constructor(postService: PostService){
  this.isActive = true;
  this.postSrv = postService;
if(this.userPost.length === 0 && this.postSrv.hasPost()){
 let getPost = this.postSrv.getPostData() as PostDto[];
 this.userPost = [...getPost];
}
}
getDate(){
  const date = new Date();
let formattedTime = date.toLocaleTimeString('en-US',
{ hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
return formattedTime;
}


displayPost(event: string){
this.post = this.postSrv.updatePostTable(new PostDto(event, this.getDate()));
this.userPost.push(this.post);
}
}
