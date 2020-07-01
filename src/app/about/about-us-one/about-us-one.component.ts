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

  content = [{
    title: 'WHAT DO WE DO',
    subtitle: 'PROMOTE AND PROVIDE GREEN & RENEWABLE SOLUTIONS FOR GREENER EARTH',
    html: `
    <ul>
      <li>Problem – Currently most of the buildings Import Electricity from Power Grid.</li>
      <li>Solution - Bring awareness on Solar and its Potential for power and heat generation and convert each building into self-sustained  powerhouse and thereby aim for the greener/cleaner future.</li>
      <li>Our Customers - Any Industrial Structure, Residencial Building, Farmhouse, Commercial Building.</li>
      <li>Offerings – <br>
        a. Provide complete ownership of the solar setup to the building owner with Installation, Operation & Maintenance services provided by us.</li>
        b. Building rooftop taken on lease by us and provide power to the building Owner and/or to the Grid
      </li>
    </ul>
    `
  },{
    title: 'WHY DO WE DO',
    subtitle: 'GREEN ENERGY FOR ALL',
    html: `
    <ul>
      <li>Ever growing energy demand.</li>
      <li>Solar power generation is greener & cheaper than the conventional power generation.</li>
      <li>Heavy Peak Usage of power and large available areas make solar a perfect energy solution.</li>
      <li>Fixed tariff for solar power for next 25 years - Contributes to savings.</li>
      <li>Lack of Economical Options for storage of bulk energy.</li>
      <li>Rooftop solar power plants are significantly economical than the diesel back-up Generator and Battery-Inverter systems.</li>
    </ul>
    `
  }]

  Lists: any = {
    isOuter: false,
    img: '06.png',
    chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
  };

  cardData: any[] = [
    {
      title : "Vision",
      desc : "Improve the lives of people by promoting eco-friendly Renewable Solutions"
    },
    {
      title : "Mission",
      desc : "To bring Positive Impact in society by making every building Zero Grid Energy for Empowering Growth & Self Sustenance"
    },
    {
      title : "Core Business Value",
      desc : "Making Environmentally & socially responsible technologies commercially viable"
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
