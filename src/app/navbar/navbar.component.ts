import { icons } from './icons';
import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaDuotoneIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  fa_bars =faBars;
  icons = icons;
  constructor() { }

  ngOnInit(): void {
  }

}
