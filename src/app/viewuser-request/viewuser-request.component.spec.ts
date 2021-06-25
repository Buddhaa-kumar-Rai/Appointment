import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserRequestComponent } from './viewuser-request.component';

describe('ViewuserRequestComponent', () => {
  let component: ViewuserRequestComponent;
  let fixture: ComponentFixture<ViewuserRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
