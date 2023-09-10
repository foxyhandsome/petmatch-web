import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportproblemComponent } from './reportproblem.component';

describe('ReportproblemComponent', () => {
  let component: ReportproblemComponent;
  let fixture: ComponentFixture<ReportproblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportproblemComponent]
    });
    fixture = TestBed.createComponent(ReportproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
