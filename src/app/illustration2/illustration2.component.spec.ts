import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Illustration2Component } from './illustration2.component';

describe('Illustration2Component', () => {
  let component: Illustration2Component;
  let fixture: ComponentFixture<Illustration2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Illustration2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Illustration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
