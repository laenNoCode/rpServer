import { Component, OnInit, Input} from '@angular/core';
import {Link} from  "../../types"
@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {

  @Input() elements : Array<Link> = [new Link("uninitialized", "/404")];
  @Input() label    : string = "defaultLabel";
  constructor() { }

  ngOnInit(): void {
  }

}
