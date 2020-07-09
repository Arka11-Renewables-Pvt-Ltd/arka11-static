import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Lets Get Started',
    subTitle: 'Do you want to use cheaper, sustainable and green power?',
    description: ''
  };

  Lists: any = {
    isOuter: false,
    img: '11.png',
    desc: "Whether your aim is to cut energy costs, reduce your carbon footprint, fulfil regulatory obligations or accomplish your sustainability goals, Arka11 has a solution for you."
  };
  constructor() { }

  ngOnInit() {
  }

}
