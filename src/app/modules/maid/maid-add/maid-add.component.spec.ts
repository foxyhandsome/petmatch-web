import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidAddComponent } from './maid-add.component';

describe('MaidAddComponent', () => {
  let component: MaidAddComponent;
  let fixture: ComponentFixture<MaidAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaidAddComponent]
    });
    fixture = TestBed.createComponent(MaidAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
