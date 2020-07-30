import { Observable } from 'rxjs';
import { APIService } from './api.service';
import { Injectable } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteDetail : Note ;
  isShowEditNoteModal = false;
  addNewNote = true;

  constructor(private apiService : APIService) { 
    this.apiService.get("/notes").subscribe(res => {
      this.noteDetail = res[0];
      console.log(this.noteDetail);
    })
  }

  getNote(): Observable<Note[]>{
    return this.apiService.get("/notes");
  }
  addNote(title: string, description: string, noteTypeId: number, content: string):  Observable<Note[]>{
    const data = {
      content: content,
      description: description,
      
      noteTypeId: noteTypeId,
      title: title
    }
    console.log(data);
    
    return this.apiService.post("/notes", data )
  }

  remoteLastNote(){
    
  
  }
  remoteNote(id: number){
  }
  showNoteDetails(id: number){
    this.apiService.get("/notes/" + id.toString()).subscribe(res => {
      this.noteDetail = res;
      console.log(this.noteDetail);
    })
    
  }

  showEditNoteModal(){
    this.isShowEditNoteModal = true;
  }

  closeEditNoteModal(){
    this.isShowEditNoteModal = false;
  }

}
