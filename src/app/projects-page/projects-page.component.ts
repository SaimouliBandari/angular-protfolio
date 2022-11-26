import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goDown(ele:(string)){
    document.getElementById(ele)?.scrollIntoView({
      behavior:'smooth',
      block:'start',
      inline:'center'
    })
  }

}
