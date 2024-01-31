import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorComponentesComponent } from './visor-componentes.component';

describe('VisorComponentesComponent', () => {
  let component: VisorComponentesComponent;
  let fixture: ComponentFixture<VisorComponentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisorComponentesComponent]
    });
    fixture = TestBed.createComponent(VisorComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
