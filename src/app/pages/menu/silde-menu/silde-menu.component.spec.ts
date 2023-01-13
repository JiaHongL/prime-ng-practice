import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SildeMenuComponent } from './silde-menu.component';

describe('SildeMenuComponent', () => {
  let component: SildeMenuComponent;
  let fixture: ComponentFixture<SildeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SildeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SildeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
