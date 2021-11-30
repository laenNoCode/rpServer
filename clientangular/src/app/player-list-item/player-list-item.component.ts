import { Component, Input, OnInit, Output} from '@angular/core';
import { Player } from 'src/types';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-player-list-item',
  templateUrl: './player-list-item.component.html',
  styleUrls: ['./player-list-item.component.scss']
})
export class PlayerListItemComponent implements OnInit {

  @Input() player: Player = new Player("placeholder player");
  @Input() selected: Boolean = false;
  @Output() clickedEvent : EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
  ngOnInit(): void {
  }
  clicked() : void{
    this.clickedEvent.emit()
  }

}
