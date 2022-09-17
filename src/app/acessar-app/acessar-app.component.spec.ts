import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessarAppComponent } from './acessar-app.component';

describe('AcessarAppComponent', () => {
  let component: AcessarAppComponent;
  let fixture: ComponentFixture<AcessarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessarAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
