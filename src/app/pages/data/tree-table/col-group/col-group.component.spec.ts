import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColGroupComponent } from './col-group.component';

describe('ColGroupComponent', () => {
  let component: ColGroupComponent;
  let fixture: ComponentFixture<ColGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
