import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxsociauxComponent } from './reseauxsociaux.component';

describe('ReseauxsociauxComponent', () => {
  let component: ReseauxsociauxComponent;
  let fixture: ComponentFixture<ReseauxsociauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseauxsociauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReseauxsociauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
