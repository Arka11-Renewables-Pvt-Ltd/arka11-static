import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
})
export class WhyChooseUsComponent implements OnInit {

  List : any = {
    title:"Why choose Us",
    subtitle : "Low Cost, Quality & Most Efficient",
    desc :  `Our mission is to be the lowest-cost power producer in the world. We sell solar power in India on long-term fixed price contracts to our customers, at prices which in many cases are at or below prevailing alternatives for these customers. Since inception, we have achieved a substantial reduction in total solar project cost, which includes a significant decrease in balance of systems costs due in part to our value engineering, design and procurement efforts. 
      Our simplified turnkey solutions, from efficient installation to streamlined commissioning processes to superior asset management, bring the power of solar within your reach. As a solar developer, our priority is to reduce the lifetime cost of energy, which means ensuring longer system life and high long-term performance. `
  };
  constructor() { }

  ngOnInit() {
  }

}
