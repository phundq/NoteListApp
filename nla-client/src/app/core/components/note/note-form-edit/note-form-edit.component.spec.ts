import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormEditComponent } from './note-form-edit.component';

describe('NoteFormEditComponent', () => {
  let component: NoteFormEditComponent;
  let fixture: ComponentFixture<NoteFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
