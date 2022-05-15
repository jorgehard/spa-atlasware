import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() isExpanded?: boolean;
  @Output() toggleMenu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  public routeLinks = [
    { link: 'about', name: 'About', icon: 'dashboard' },
    { link: 'locations', name: 'Locations', icon: 'account_balance' },
  ];
}
