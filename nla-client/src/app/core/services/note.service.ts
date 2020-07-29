import { Injectable } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [
    {
      id: 1,
      title: "test A",
      content: "test note first time",
      noteType: 1,
      created: Date.now(),
      modified: Date.now()
    }
    
  ];

  noteDetail : Note = this.notes[0] ;
  constructor() { }

  getNote(): Note[]{
    return this.notes;
  }
  addNote(): Note[]{
    let lastNoteId :number;
    if(this.notes.length == 0){
      lastNoteId = 0;
    }else{
      lastNoteId = this.notes[this.notes.length - 1].id;
    }

    const note :Note = new Note(lastNoteId + 1,"test " + (lastNoteId +1).toString() , "test note " + (lastNoteId +1).toString(), 1, Date.now(),Date.now());
    this.notes.push(note);
    return this.notes;
  }
  remoteLastNote(): Note[]{
    
    this.notes.splice(this.notes.length-1,1);
    return this.notes;
  }
  remoteNote(id): Note[]{
    const note : Note = this.notes.find(note => note.id == id );
    this.notes.splice(this.notes.indexOf(note),1);
    return this.notes;
  }
  showNoteDetails(id: number){
    this.noteDetail = this.notes.find(note => note.id == id );
    console.log(id);
    console.log(this.noteDetail);
    
  }
}
