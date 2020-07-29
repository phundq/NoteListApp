import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ListNotesComponent } from '../list-notes/list-notes.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  @Input() content : string; 

  ngOnInit(): void {
    console.log(this.content);
    

    
    
    
  }
  
  
}
