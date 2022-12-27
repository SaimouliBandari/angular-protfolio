import { Component, OnInit } from '@angular/core';
import { myData } from './information';
import { faStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  star = faStar;
  
  constructor() { }
  my: any;


  

  
  ngOnInit(): void {
    this.my = myData
    //console.log(this.icon('phone'));
    
  }

  startsArray(arrLen: Number): Array<Number> {
    return new Array(arrLen);
  }

}
