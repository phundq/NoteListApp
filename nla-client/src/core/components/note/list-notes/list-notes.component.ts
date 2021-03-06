import { Note } from './../../../model/note';
import { NoteService } from './../../../services/note.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
    this.notes =  this.noteService.getNote();
  }

  notes: Observable<Note[]> = this.noteService.getNote();

  getNote(){
    this.notes =  this.noteService.getNote();
  }
  
  removeNote(id: number){
    this.noteService.remoteNote(id).subscribe(res => {
      console.log(res);
      this.getNote();
    },
    error => console.log(error)
    );
    
  }

  showNoteDetail(id: 0){
    this.noteService.showNoteDetails(id);
    console.log(id);
    
  }


}
