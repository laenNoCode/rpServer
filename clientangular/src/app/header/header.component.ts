import { Component, OnInit } from '@angular/core';
import "../header-list/header-list.component"
import {Link} from "../../types"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  games : Array<Link> = [ new Link("game0", "/game/0"), new Link("game1", "/game/1")];
  profile: Array<Link> = [new Link("Profile", "/profile"), new Link("Disconnect", "/disconnect")]
  ngOnInit(): void {
  }

}
