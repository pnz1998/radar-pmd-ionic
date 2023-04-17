import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAnalysisComponent } from './warning-analysis.component';

describe('WarningAnalysisComponent', () => {
  let component: WarningAnalysisComponent;
  let fixture: ComponentFixture<WarningAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
