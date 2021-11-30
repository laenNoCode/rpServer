import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderListComponent } from './header-list/header-list.component';
import { GameComponent } from './game/game.component';
import { PlayerMenuComponent } from './player-menu/player-menu.component';
import { PlayerMenuChooserComponent } from './player-menu-chooser/player-menu-chooser.component';
import { PlayerMenuChatComponent } from './player-menu-chat/player-menu-chat.component';
import { GameMapComponent } from './game-map/game-map.component';
import { PlayerListPannelComponent } from './player-list-pannel/player-list-pannel.component';
import { PlayerListItemComponent } from './player-list-item/player-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderListComponent,
    GameComponent,
    PlayerMenuComponent,
    PlayerMenuChooserComponent,
    PlayerMenuChatComponent,
    GameMapComponent,
    PlayerListPannelComponent,
    PlayerListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
