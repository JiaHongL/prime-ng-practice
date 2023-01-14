import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartModelComponent } from './chart-model.component';

describe('ChartModelComponent', () => {
  let component: ChartModelComponent;
  let fixture: ComponentFixture<ChartModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
