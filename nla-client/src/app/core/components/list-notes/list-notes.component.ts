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
    console.log(this.noteService.getNote());
  }

  notes: Note[] = this.noteService.getNote();

  addNote(){
    this.notes = this.noteService.addNote();
  }

  removeLastNote(){
    this.notes = this.noteService.remoteLastNote();
  }
  removeNote(id: number){
    this.notes = this.noteService.remoteNote(id);
  }

  showNoteDetail(id: 0){
    this.noteService.showNoteDetails(id);
    console.log(id);
    
  }

}
