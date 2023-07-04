import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseEnExamenComponent } from './mise-en-examen.component';

describe('MiseEnExamenComponent', () => {
  let component: MiseEnExamenComponent;
  let fixture: ComponentFixture<MiseEnExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseEnExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiseEnExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
