import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexScrollComponent } from './flex-scroll.component';

describe('FlexScrollComponent', () => {
  let component: FlexScrollComponent;
  let fixture: ComponentFixture<FlexScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
