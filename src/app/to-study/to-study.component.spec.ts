import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToStudyComponent } from './to-study.component';

describe('ToStudyComponent', () => {
  let component: ToStudyComponent;
  let fixture: ComponentFixture<ToStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
