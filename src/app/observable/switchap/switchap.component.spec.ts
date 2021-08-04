import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchapComponent } from './switchap.component';

describe('SwitchapComponent', () => {
  let component: SwitchapComponent;
  let fixture: ComponentFixture<SwitchapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
