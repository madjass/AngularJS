import { Component, Input } from '@angular/core';
import { PostDto } from "../dto/post-dto";
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.css'
})
export class DeckComponent {

@Input()  userPosts?: PostDto[] ;
postServ?:PostService;


constructor(postSrv:PostService){
  this.postServ = postSrv;
}

}
