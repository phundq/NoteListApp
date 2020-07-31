import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStoreAComponent } from './test-store-a.component';

describe('TestStoreAComponent', () => {
  let component: TestStoreAComponent;
  let fixture: ComponentFixture<TestStoreAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStoreAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStoreAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
