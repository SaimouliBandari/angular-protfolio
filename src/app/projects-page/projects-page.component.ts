import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {


  projectArray!: Array<any>;
  dataFromRoute: any;
  projectDiscriction: string = '';
  activeButton: string = '';
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(
      data => {
        this.dataFromRoute = data;
      }
    )
    let { projects, data } = this.dataFromRoute;
    this.projectArray = projects;
    this.projectDiscriction = projects[0].about;
  }

  goDown(ele: (string), project: any) {
    document.getElementById(ele)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center'
    });
    this.projectDiscriction = project.about;
    this.activeButton = ele;
  }

  isActive(arg0: string) {
    console.log(this.activeButton === arg0, " btn name : ", arg0);

    return this.activeButton === arg0;
  }

}
