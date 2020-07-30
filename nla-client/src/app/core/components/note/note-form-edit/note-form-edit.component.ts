import { ListNotesComponent } from './../list-notes/list-notes.component';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from 'src/app/core/services/note.service';

@Component({
  selector: 'app-note-form-edit',
  templateUrl: './note-form-edit.component.html',
  styleUrls: ['./note-form-edit.component.css']
})
export class NoteFormEditComponent implements OnInit {

  constructor(private fb: FormBuilder, public noteService: NoteService, public listNotesComponent :ListNotesComponent) { }

  ngOnInit(): void {
  }

  // data - post - put
  title: string = null;
  description: string = null;
  content: string = null;
  noteTypeId: number = null;


  // modal
  closeModal() {
    this.noteService.closeEditNoteModal();
  }

  handlerClickOk() {

    if(this.title != null && this.content != null && this.noteTypeId != null){
      this.noteService.addNote(this.title, this.description, this.noteTypeId, this.content).subscribe(x => console.log(x)
      );
    }

    this.listNotesComponent.getNote();

    



    this.closeModal()
  }

  handlerClickCancel() {
    this.closeModal()
  }

  handlerSelectChange(value: any) {
    this.noteTypeId = value;
    console.log("noteTypeId");
    console.log(this.noteTypeId);
    
  }
  handlerInputChange(event: any) {
    console.log(event);
    
    let idTarget = event.target.id;
    const value = event.target.value;
    if (idTarget === 'title') {
      this.title = value;
      if (this.title.trim() === '') {
        this.title = null;
      }
      console.log(idTarget)
      console.log(this.title)
    }

    if (idTarget === 'description') {
      this.description = value;
      if (this.description.trim() === '') {
        this.description = null;
      }
      console.log(idTarget)
      console.log(this.description)
    }

    if (idTarget === 'content') {
      this.content = value;
      if (this.content.trim() === '') {
        this.content = null;
      }
      console.log(idTarget)
      console.log(this.content)
    }
  }





}
