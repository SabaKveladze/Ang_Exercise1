import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayBackgroundComponent } from './gray-background.component';

describe('GrayBackgroundComponent', () => {
  let component: GrayBackgroundComponent;
  let fixture: ComponentFixture<GrayBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrayBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrayBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
