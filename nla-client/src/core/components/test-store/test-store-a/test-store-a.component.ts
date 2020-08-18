import { Add } from './../../../../store/actions/label.action';
import { filter } from 'rxjs/operators';
import { AppState, getLabels } from './../../../../app/app.state';
import { Observable } from 'rxjs';
import { Label } from '../../../model/label';
import { Store, createSelector } from '@ngrx/store';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ELabelAction } from 'src/store/actions/label.action';

@Component({
  selector: 'app-test-store-a',
  templateUrl: './test-store-a.component.html',
  styleUrls: ['./test-store-a.component.css']
})
export class TestStoreAComponent implements OnInit {

  labels: Observable<Label[]>;
  myForm: FormGroup;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder){
    this.labels = this.store.select(getLabels);
    this.createForm()
   }

  ngOnInit() {}

  addLabel(id: number, name: string){
    console.log(id+'   '+ name);
    
    this.store.dispatch(new Add({id, name}));
    this.myForm.reset();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

}
