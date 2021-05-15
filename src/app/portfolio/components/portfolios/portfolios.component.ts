import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html'
})
export class PortfoliosComponent implements OnInit {

  constructor() { }
  //enum ['Rooftop', 'Commercial', 'SolarPlant', 'Others']
  List: any[] = [
    {
      id:0,
      class : 'rooftop',
      href: 'portfolio/portfolio-details',
      img: '08.png',
      title:'Business Growth',
      type:'Rooftop'
    },
    {
      id:1,
      class : 'rooftop',
      href: 'portfolio/portfolio-details',
      img: '02.png',
      title:'Business Growth',
      type:'Rooftop'
    },
    {
      id:2,
      class : 'commercial',
      href: 'portfolio/portfolio-details',
      img: '03.png',
      title:'Business Growth',
      type:'Commercial'
    },
    {
      id:3,
      class : 'commercial',
      href: 'portfolio/portfolio-details',
      img: '08.png',
      title:'Business Growth',
      type:'Commercial'
    },
    {
      id:4,
      class : 'solar-plant',
      href: 'portfolio/portfolio-details',
      img: '01.png',
      title:'Business Growth',
      type:'SolarPlant'
    },
    {
      id:5,
      class : 'solar-plant',
      href: 'portfolio/portfolio-details',
      img: '08.png',
      title:'Business Growth',
      type:'SolarPlant'
    },
    {
      id:6,
      class : 'others',
      href: 'portfolio/portfolio-details',
      img: '03.png',
      title:'Business Growth',
      type:'Others'
    },
    {
      id:7,
      class : 'others',
      href: 'portfolio/portfolio-details',
      img: '02.png',
      title:'Business Growth',
      type:'Others'
    }
  ];
  ngOnInit(): void {
  }

}
