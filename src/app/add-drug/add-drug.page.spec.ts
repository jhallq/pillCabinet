import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrugPage } from './add-drug.page';

describe('AddDrugPage', () => {
  let component: AddDrugPage;
  let fixture: ComponentFixture<AddDrugPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDrugPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
