import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { BlankPageComponent } from './blank-page/blank-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    ProjectsPageComponent,
    BlankPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
