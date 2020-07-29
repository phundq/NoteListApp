import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../model/note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes =  this.noteService.getNote();
  }

  notes: Observable<Note[]> = this.noteService.getNote();

  addNote(){
    this.notes =  this.noteService.getNote();
  }

  removeNote(id: number){
    this.notes =  this.noteService.getNote();
  }

  showNoteDetail(id: 0){
    this.noteService.showNoteDetails(id);
    console.log(id);
    
  }

}
