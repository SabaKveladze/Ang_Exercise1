import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAndSocialsComponent } from './map-and-socials.component';

describe('MapAndSocialsComponent', () => {
  let component: MapAndSocialsComponent;
  let fixture: ComponentFixture<MapAndSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapAndSocialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapAndSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
