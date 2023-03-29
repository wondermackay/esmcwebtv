import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistMcardComponent } from './playlist-mcard.component';

describe('PlaylistMcardComponent', () => {
  let component: PlaylistMcardComponent;
  let fixture: ComponentFixture<PlaylistMcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistMcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistMcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
