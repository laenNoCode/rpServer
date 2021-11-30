import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Player } from 'src/types';
import "../player-list-item/player-list-item.component"
@Component({
  selector: 'app-player-list-pannel',
  templateUrl: './player-list-pannel.component.html',
  styleUrls: ['./player-list-pannel.component.scss']
})
export class PlayerListPannelComponent implements OnInit, OnChanges {
  @Input() players : Array<Player> = [];
  playerPanelsClicked : Array<Boolean> = []
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(change : SimpleChanges) : void {
    if (change["players"] != undefined)
    {
      let length = change["players"].currentValue.length
      this.playerPanelsClicked = new Array<Boolean>(length)
      console.log(length)
      for (let i = 0; i < length; ++i){
        this.playerPanelsClicked[i] = false;
      }
    }
  }
  onChildrenClick(index : number) : void{
    for(let i = 0; i < this.playerPanelsClicked.length; i ++){
      this.playerPanelsClicked[i] = false;
    } 
    this.playerPanelsClicked[index] = true;
    console.log(index + " clicked")
  }
}
