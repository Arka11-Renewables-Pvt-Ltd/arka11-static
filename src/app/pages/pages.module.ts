import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes  } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { OurTeamComponent } from './our-team/our-team.component';
import { OurClientComponent } from './our-client/our-client.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { PartnerComponent } from './partner/partner.component';
import { SolarCalculatorComponent } from './solar-calculator/solar-calculator.component';


const routes: Routes = [
  // {
  //   path: 'our-team',
  //   component: OurTeamComponent,
  // },
  // {
  //   path: 'client',
  //   component: OurClientComponent,
  // },
  // {
  //   path: 'career',
  //   component: CareersComponent,
  // },
    {
      path: 'contact-us',
      component: ContactUsComponent,
    },
    {
      path: 'get-quote',
      component: GetQuoteComponent,
    },
    {
      path: 'channel-partner',
      component: PartnerComponent
    },
    {
      path: 'solar-calculator',
      component: SolarCalculatorComponent
    }
  ];
@NgModule({
  declarations: [OurTeamComponent, OurClientComponent, CareersComponent, ContactUsComponent, GetQuoteComponent, PartnerComponent, SolarCalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    XaminModule

  ]
})
export class PagesModule { }
