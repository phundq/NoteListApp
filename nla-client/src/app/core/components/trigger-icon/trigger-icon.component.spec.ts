import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerIconComponent } from './trigger-icon.component';

describe('TriggerIconComponent', () => {
  let component: TriggerIconComponent;
  let fixture: ComponentFixture<TriggerIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
