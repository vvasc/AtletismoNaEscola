import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProvaComponent } from './select-prova.component';

describe('SelectProvaComponent', () => {
  let component: SelectProvaComponent;
  let fixture: ComponentFixture<SelectProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
