import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectConteudoComponent } from './select-conteudo.component';

describe('SelectConteudoComponent', () => {
  let component: SelectConteudoComponent;
  let fixture: ComponentFixture<SelectConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectConteudoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
