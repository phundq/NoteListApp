import { NoteService } from './../../../services/note.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  constructor(public noteService: NoteService) { }
  ngOnInit(): void {
  }

}
