import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMenuChatComponent } from './player-menu-chat.component';

describe('PlayerMenuChatComponent', () => {
  let component: PlayerMenuChatComponent;
  let fixture: ComponentFixture<PlayerMenuChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMenuChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMenuChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
