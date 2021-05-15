import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { XaminModule } from '../xamin/xamin.module';
import { PortfoliosComponent } from './components/portfolios/portfolios.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'portfolio-details/:p_id',
    component: PortfolioDetailsComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, PortfoliosComponent, PortfolioDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule

  ]
})
export class PortFolioModule { }
