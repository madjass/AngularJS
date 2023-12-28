import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-bar',
  templateUrl: './text-bar.component.html',
  styleUrl: './text-bar.component.css'
})
export class TextBarComponent {

  userText = '';
 @Output() addPost = new EventEmitter<any>();

  userTextHandler(){
    if(this.userText !== ''){
   this.addPost.emit(this.userText);
   this.userText = '';
  }
}
}
