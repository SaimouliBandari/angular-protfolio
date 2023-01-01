import { icons } from './icons';
import { Component, Input, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  fa_bars =faBars;
  icons = icons;


  constructor(private location : Location) { }

  pageName = this.location.path(true);

  ngOnInit(): void {
    console.log(this.pageName);
  }

  ngOnChanges(){
    
  }

}
