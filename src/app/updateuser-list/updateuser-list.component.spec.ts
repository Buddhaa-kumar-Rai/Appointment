import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserListComponent } from './updateuser-list.component';

describe('UpdateuserListComponent', () => {
  let component: UpdateuserListComponent;
  let fixture: ComponentFixture<UpdateuserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
