import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ilustration1Component } from './ilustration1.component';

describe('Ilustration1Component', () => {
  let component: Ilustration1Component;
  let fixture: ComponentFixture<Ilustration1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ilustration1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ilustration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
