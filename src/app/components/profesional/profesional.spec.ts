import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profesional } from './profesional';

describe('Profesional', () => {
  let component: Profesional;
  let fixture: ComponentFixture<Profesional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profesional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profesional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
