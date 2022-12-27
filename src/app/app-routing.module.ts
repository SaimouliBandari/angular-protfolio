import { ResumeComponent } from './resume/resume.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { BlankPageComponent } from './blank-page/blank-page.component';

const routes: Routes = [
  {
    path : '',
    component: MainPageComponent
  },
  {
    path : 'home', 
    component : MainPageComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },{
    path: 'service',
    component: BlankPageComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path : 'contact',
    component : BlankPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
