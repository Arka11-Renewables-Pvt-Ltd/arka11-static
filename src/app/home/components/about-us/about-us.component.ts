import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    title: 'About Us',
    subTitle: 'Focused on Sustainable Power',
    description: 'Our mission is to be the lowest-cost power producer in the world. We sell solar power in India on long-term fixed price contracts to our customers, at prices which in many cases are at or below prevailing alternatives for these customers. Since inception, we have achieved a substantial reduction in total solar project cost, which includes a significant decrease in balance of systems costs due in part to our value engineering, design and procurement efforts.'
  };

  Lists: any = {
    isOuter: false,
    img: '01.png',
    desc:"Our mission is to be the lowest-cost power producer in the world. We sell solar power in India on long-term fixed price contracts to our customers, at prices which in many cases are at or below prevailing alternatives for these customers. Since inception, we have achieved a substantial reduction in total solar project cost, which includes a significant decrease in balance of systems costs due in part to our value engineering, design and procurement efforts."
  };

  constructor() { }

  ngOnInit() {
  }

}
