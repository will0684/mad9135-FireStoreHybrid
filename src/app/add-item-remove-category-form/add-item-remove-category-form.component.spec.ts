import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemRemoveCategoryFormComponent } from './add-item-remove-category-form.component';

describe('AddItemRemoveCategoryFormComponent', () => {
  let component: AddItemRemoveCategoryFormComponent;
  let fixture: ComponentFixture<AddItemRemoveCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemRemoveCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemRemoveCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
