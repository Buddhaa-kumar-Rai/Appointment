import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadminListComponent } from './updateadmin-list.component';

describe('UpdateadminListComponent', () => {
  let component: UpdateadminListComponent;
  let fixture: ComponentFixture<UpdateadminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateadminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateadminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
