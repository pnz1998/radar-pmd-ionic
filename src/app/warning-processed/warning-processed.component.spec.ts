import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningProcessedComponent } from './warning-processed.component';

describe('WarningProcessedComponent', () => {
  let component: WarningProcessedComponent;
  let fixture: ComponentFixture<WarningProcessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningProcessedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
