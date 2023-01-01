import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-me-button',
  templateUrl: './contact-me-button.component.html',
  styleUrls: ['./contact-me-button.component.scss']
})
export class ContactMeButtonComponent implements OnInit {

  @Input() options : any; //TO DO

  @Input() profileName! : string;

  clickedOptions : Boolean = false;

  displayButton : Boolean = true;

  closeIcon : IconProp = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  displayContactBtn(){  
    this.onClickOption();
  }
  onClickOption(){
    this.clickedOptions = !this.clickedOptions;
    this.displayButton = !this.displayButton;

  }

}
