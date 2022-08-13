import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoComponenteTesteComponent } from './segundo-componente-teste.component';

describe('SegundoComponenteTesteComponent', () => {
  let component: SegundoComponenteTesteComponent;
  let fixture: ComponentFixture<SegundoComponenteTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoComponenteTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoComponenteTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
