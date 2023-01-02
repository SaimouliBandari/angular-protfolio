import { Component, OnInit } from '@angular/core';
import { info } from './mainpage-infomation';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  details : any = info;
  constructor() {
    console.log(screen.width)
   }

  display_msg = 'Welcome';
  ngOnInit(): void {
    setTimeout(() => {
      this.display_msg = 'null'
    }, 3010);
  }
}
