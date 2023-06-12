import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideouploadeComponent } from './videouploade.component';

describe('VideouploadeComponent', () => {
  let component: VideouploadeComponent;
  let fixture: ComponentFixture<VideouploadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideouploadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideouploadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
