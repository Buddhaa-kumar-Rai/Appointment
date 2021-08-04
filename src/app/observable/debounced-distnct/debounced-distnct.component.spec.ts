import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncedDistnctComponent } from './debounced-distnct.component';

describe('DebouncedDistnctComponent', () => {
  let component: DebouncedDistnctComponent;
  let fixture: ComponentFixture<DebouncedDistnctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouncedDistnctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncedDistnctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
