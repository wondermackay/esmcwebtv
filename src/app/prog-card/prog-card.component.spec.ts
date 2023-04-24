import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgCardComponent } from './prog-card.component';

describe('ProgCardComponent', () => {
  let component: ProgCardComponent;
  let fixture: ComponentFixture<ProgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
