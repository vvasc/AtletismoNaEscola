import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPontuacaoComponent } from './form-pontuacao.component';

describe('FormPontuacaoComponent', () => {
  let component: FormPontuacaoComponent;
  let fixture: ComponentFixture<FormPontuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPontuacaoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
