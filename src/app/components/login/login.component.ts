import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PageRoutes } from 'src/app/enum/page-routes.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  
  validateForm(): void {
    this.router.navigate([PageRoutes.HOME_DASHBOARD]);
  }
}
