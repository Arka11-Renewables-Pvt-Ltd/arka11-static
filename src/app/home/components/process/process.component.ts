import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
})
export class ProcessComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Process',
    subTitle:  'Our Execution Process'
  };

  circle1Data: any = {
    img: '01.png',
    title: 'Survey',
    description: 'Get a free survey and let us know about any specific requirements.',
    delay: '0.6s',
    positionClass: 'right',
    type:'xamin-process'

  };

  circle2Data: any = {
    class: 'mt-4 mt-md-0',
    img: '02.png',
    title: 'Design',
    description: 'We have expert in-house engineering capabilities to build innovative solar solutions.',
    delay: '1s',
    positionClass: 'right',
    type:'xamin-process'

  };

  circle3Data: any = {
    class: 'mt-4 mt-md-0',
    img: '03.png',
    title: 'Installation',
    description: 'Our integrated profile affords us greater control over project development, construction and operation.',
    delay: '1.4s',
    type:'xamin-process'

  };


  constructor() { }

  ngOnInit() {
  }

}
