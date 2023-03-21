import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgBtnComponent } from './prog-btn.component';

describe('ProgBtnComponent', () => {
  let component: ProgBtnComponent;
  let fixture: ComponentFixture<ProgBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
