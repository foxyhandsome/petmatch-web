import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailMatchComponent } from './view-detail-match.component';

describe('ViewDetailMatchComponent', () => {
  let component: ViewDetailMatchComponent;
  let fixture: ComponentFixture<ViewDetailMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDetailMatchComponent]
    });
    fixture = TestBed.createComponent(ViewDetailMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
