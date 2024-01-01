export class PostDto {
  id?:number;
  post?:string;
  createdDate?:string;
  likes:number =0
  static index = 0;

  constructor(post: string, date: string){
    this.post = post;
    this.createdDate = date;
    this.updateCount();
  }
  updateCount(){
    PostDto.index++;
  }
  getCount(){
    return PostDto.index;
  }
  setId(id: number){
    this.id = id;

  }
  addLike(){
    this.likes++;
  }
}
