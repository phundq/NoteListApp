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
  dataEdit = null;

  constructor(private apiService : APIService) { 
    this.apiService.get("/notes").subscribe(res => {
      this.noteDetail = res[0];
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
  remoteNote(id: number):  Observable<any>{
    let data = {
      "ids": [
        id
      ]
    }
    return this.apiService.delete("/notes/", data);
  }

  showNoteDetails(id: number){
    this.apiService.get("/notes/" + id.toString()).subscribe(res => {
      this.noteDetail = res;
      console.log(this.noteDetail);
    })
    
  }

  showEditNoteModal(action : string = "add", data : any){
    if(action != null && action === "add"){
      this.addNewNote = true;
    }
    if(action != null && action === "edit"){
      this.addNewNote = false;
    }

    if(data != null){
      this.dataEdit = data;
      
    }

    
    this.isShowEditNoteModal = true;
  }

  closeEditNoteModal(){
    this.isShowEditNoteModal = false;
  }

}
