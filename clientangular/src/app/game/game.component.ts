import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from 'src/types';
import "../player-menu/player-menu.component"
import "../game-map/game-map.component"
import "../player-list-pannel/player-list-pannel.component"
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameID :number = 0;
  mj: boolean = true;
  players: Array<Player> = [new Player("default"),
   new Player("youen","https://cdn.discordapp.com/avatars/231800259997597696/f8bf79480a6941cde2c6e36e0c46f268.webp?size=48"),
   new Player("béa", "https://cdn.discordapp.com/avatars/380448912793665538/7bb2b4be4b206ab536a3b3ec5b7a074b.webp?size=128"),
   new Player("arthur", "https://cdn.discordapp.com/avatars/167273331974864897/30d81b12c7bf3402d93b4ecbfdf7691b.webp?size=48"),
   new Player("AxelCadwish", "https://cdn.discordapp.com/avatars/294941591448322050/36e46dff87cf3df6405204327d4a0be7.webp?size=48"),
   new Player("ThariakaToto", "https://cdn.discordapp.com/avatars/110128220610797568/a_b946e8e3f9d931f549c952d8423a53d7.webp?size=48"),
   new Player("coolee de fraise", "https://cdn.discordapp.com/avatars/204997152219463680/6c993fe05df9ff3d9d607100c8ccee61.webp?size=48"),
   new Player("Doppio", "https://cdn.discordapp.com/avatars/208173194908008448/8ca9c34d8aef0a3efde67d27db5036f7.webp?size=48"),
   new Player("Micha", "https://cdn.discordapp.com/avatars/300240095196348428/e31a0a7a7255407c4015480525f060e0.webp?size=48")

  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let tmpID :string = this.route.snapshot.paramMap.get("gameID") || ""
    this.gameID = Number.parseInt(tmpID)
  }

}
