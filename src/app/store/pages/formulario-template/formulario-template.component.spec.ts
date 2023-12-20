import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTemplateComponent } from './formulario-template.component';

describe('FormularioTemplateComponent', () => {
  let component: FormularioTemplateComponent;
  let fixture: ComponentFixture<FormularioTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTemplateComponent]
    });
    fixture = TestBed.createComponent(FormularioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
