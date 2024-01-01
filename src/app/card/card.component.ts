import { Component, Input } from '@angular/core';
import { PostDto } from "../dto/post-dto";
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

@Input()  postDto?: PostDto;
  postSrv: PostService;

  constructor(postServ: PostService){
    this.postSrv = postServ;
  }

  addLike(){
  this.postDto?.addLike();
  this.postSrv.updateLikes(this.postDto);
  }
}
