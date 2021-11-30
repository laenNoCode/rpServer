import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListPannelComponent } from './player-list-pannel.component';

describe('PlayerListPannelComponent', () => {
  let component: PlayerListPannelComponent;
  let fixture: ComponentFixture<PlayerListPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerListPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
