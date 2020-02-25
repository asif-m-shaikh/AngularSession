import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMasterTableComponent } from './user-master-table.component';

describe('UserMasterTableComponent', () => {
  let component: UserMasterTableComponent;
  let fixture: ComponentFixture<UserMasterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMasterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMasterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
