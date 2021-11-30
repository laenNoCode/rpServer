import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMenuChooserComponent } from './player-menu-chooser.component';

describe('PlayerMenuChooserComponent', () => {
  let component: PlayerMenuChooserComponent;
  let fixture: ComponentFixture<PlayerMenuChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMenuChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMenuChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
