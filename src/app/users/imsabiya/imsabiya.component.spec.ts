import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsabiyaComponent } from './imsabiya.component';

describe('ImsabiyaComponent', () => {
  let component: ImsabiyaComponent;
  let fixture: ComponentFixture<ImsabiyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImsabiyaComponent]
    });
    fixture = TestBed.createComponent(ImsabiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
