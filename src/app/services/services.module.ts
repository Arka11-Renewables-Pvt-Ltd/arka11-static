import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { IndexComponent } from './index/index.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, OurServicesComponent, OurTestimonialComponent, AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule

  ]
})
export class ServicesModule { }
