import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public isExpanded = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
