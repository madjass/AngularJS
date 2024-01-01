import { Injectable } from '@angular/core';
import { PostDto } from "../dto/post-dto";

@Injectable({
  providedIn: 'root'
})
export class PostService {
 private postTable?:Array<PostDto>;
 static postId = 0;
  constructor() {
   this.postTable = [];
  }

    updatePostTable(postDto: PostDto){
      postDto.setId(this.generateId());
      this.postTable?.push(postDto);
      return postDto;
    }

    generateId(): number{
      PostService.postId++;
      return PostService.postId;
    }

    updateLikes(newPost: PostDto | undefined){
      this.postTable = this.postTable?.map((oldPost) => {
        if (oldPost.id === newPost?.id){
        return  {...newPost};
      }
      return oldPost;
    }) as Array<PostDto>;

    }

      getPostData(): Array<PostDto> | undefined{
        let val =  this.postTable;
          return val;
      }
      hasPost(){
      let retVal = false;
        if (this.postTable !== undefined && this.postTable?.length > 0){
          retVal = true;
        }
        return retVal;
      }

}
