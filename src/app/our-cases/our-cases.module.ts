import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { PortfolioTwoComponent } from './portfolio-two/portfolio-two.component';
import {XaminModule} from "../xamin/xamin.module";

const routes: Routes = [
    {
      path: '',
      component: PortfolioTwoComponent,
    }
  ]

@NgModule({
  declarations: [PortfolioTwoComponent],
  imports: [
    CommonModule,
    XaminModule,
    RouterModule.forChild(routes),

  ]
})
export class OurCasesModule { }
