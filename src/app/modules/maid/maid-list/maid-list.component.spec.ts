import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidListComponent } from './maid-list.component';

describe('MaidListComponent', () => {
  let component: MaidListComponent;
  let fixture: ComponentFixture<MaidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
