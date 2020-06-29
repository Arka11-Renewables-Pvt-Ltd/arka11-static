import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-about-us-one',
  templateUrl: './about-us-one.component.html',
})

export class AboutUsOneComponent implements OnInit {

  data : any = {
    title:"About us",
    img:"07.png"
  };

  titleSectionProp: any = {
    title: 'About Us',
    subTitle: 'Sustainable & Affordable',
    descriptionHTML: `<p>Incorporated amid corona crisis 2020, we are team of young energetic individuals who dream of fight global climatic changes by adapting to Renewable power sources to cater the ever hungry and demanding world to become self-sustained and yet contribute to the future & nature.</p>
      <p>Urgent actions will make the consequence of global warning manageable, what is at stake is the half of ecosystem, wildlife, and importantly the world we leave for our children.</p>
      <p>With current technology we cannot reach sun, but sun definitely is more approachable from earth as photons, with 8 minutes of travel a photon from sun can be a game changer by Providing life energy and bring sustainability, each leaf of a tree is an energy synthesiser hence is self-sustaining without any external search for food & energy, similarly each house should become self-sustained power house by harness the power of sun.</p>
      <p>India has a unique confluence., we are a place with lot of sunshine, we are Tech savvy community, we have high electricity cost, highly population with high demand of electricity.</p>
    `
  };

  Lists: any = {
    isOuter: false,
    img: '06.png',
    chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
  };

  cardData: any[] = [
    {
      title : "Vision",
      desc : "Making Every Buildings Zero Net Energy for Empowering Growth"
    },
    {
      title : "Mission",
      desc : "Making Environmentally & socially responsible technologies commercially viable"
    },
    {
      title : "Core Business Value",
      desc : "To bring Positive Impact in environment & Society"
    },
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
