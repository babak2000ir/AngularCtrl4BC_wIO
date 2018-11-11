import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRecordComponent } from './nav-record.component';

describe('NavRecordComponent', () => {
  let component: NavRecordComponent;
  let fixture: ComponentFixture<NavRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
