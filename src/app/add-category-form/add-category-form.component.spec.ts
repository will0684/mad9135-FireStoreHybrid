import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryFormComponent } from './add-category-form.component';

describe('AddCategoryFormComponent', () => {
  let component: AddCategoryFormComponent;
  let fixture: ComponentFixture<AddCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
