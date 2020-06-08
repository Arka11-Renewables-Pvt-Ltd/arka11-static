import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
})
export class NavTabsComponent implements OnInit {


  titleSectionProp: any = {
    class: 'text-center',
    title: 'our Services',
    subTitle: 'Explore Our Data Services'
  };

  navList: any[] = [
    {
      id: 'tab-software-development',
      title: 'OPEX',
      sub_title:"Arka11 will own the Installation along with O&M for next 25 years.",
      desc:"Customer only has to pay for solar electricity at the rate lower by 20-40% than grid tariff. All that customer needs to do is to sign a power purchase agreement and sit back and enjoy.",
      active: true,
      chkList: ['Zero Investment','Zero Performance Risk','Savings on the monthly electricity bills','Fixed Electricity price for next 25 years']
    },
    {
      id: 'tab-application-services',
      title: 'RESCO',
      sub_title:"Third party investor (RESCO) will own the installation",
      desc:"Arka11 will carry the O&M for next 25 year for the RESCO. Customer will pay a pre-decided monthly tariff which is lower than prevailing electricity bill.",
      chkList: ['No upfront Investment','Zero Performance Risk','Savings on the monthly electricity bills','Cheaper Electricity for next 25 years']
    },
    {
      id: 'tab-data-analytics',
      title: 'CAPEX',
      sub_title:"Customer will own the solar power plant installation",
      desc:"Arka11 will do the design and plant construction and will take up O&M on regular basis.",
      chkList: ['Savings on the monthly electricity bills','Cheaper Electricity for next 25 years','Best in Market Investment with Guaranteed ROI','Quicker Payback Period','Free Electricity after Payback period']
    },
    // {
    //   id: 'tab-help-desk-services',
    //   title: 'Help Desk Services',
    //   sub_title:"Choose Your Help Desk Service",
    //   desc:"Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
    //   chkList: ['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    // }
  ];


  constructor() { }

  ngOnInit() {
  }

}
