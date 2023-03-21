import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVideoComponent } from './nav-video.component';

describe('NavVideoComponent', () => {
  let component: NavVideoComponent;
  let fixture: ComponentFixture<NavVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
