import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { AboutUsOneComponent } from './about-us-one/about-us-one.component';
import { HistoryComponent } from './history/history.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsOneComponent,
  }
];

@NgModule({
  declarations: [AboutUsOneComponent, HistoryComponent, OurTeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class AboutModule { }
