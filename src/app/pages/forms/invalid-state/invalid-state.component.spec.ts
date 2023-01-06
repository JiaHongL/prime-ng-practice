import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidStateComponent } from './invalid-state.component';

describe('InvalidStateComponent', () => {
  let component: InvalidStateComponent;
  let fixture: ComponentFixture<InvalidStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
