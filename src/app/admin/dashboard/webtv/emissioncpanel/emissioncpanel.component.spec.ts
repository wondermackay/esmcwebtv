import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissioncpanelComponent } from './emissioncpanel.component';

describe('EmissioncpanelComponent', () => {
  let component: EmissioncpanelComponent;
  let fixture: ComponentFixture<EmissioncpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissioncpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissioncpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
