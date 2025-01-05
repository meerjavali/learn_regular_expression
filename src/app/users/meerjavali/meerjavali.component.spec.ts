import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeerjavaliComponent } from './meerjavali.component';

describe('MeerjavaliComponent', () => {
  let component: MeerjavaliComponent;
  let fixture: ComponentFixture<MeerjavaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeerjavaliComponent]
    });
    fixture = TestBed.createComponent(MeerjavaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
