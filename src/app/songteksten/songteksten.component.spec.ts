import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongtekstenComponent } from './songteksten.component';

describe('SongtekstenComponent', () => {
  let component: SongtekstenComponent;
  let fixture: ComponentFixture<SongtekstenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongtekstenComponent]
    });
    fixture = TestBed.createComponent(SongtekstenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
