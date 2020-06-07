import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-portfolio-box',
  templateUrl: './project-portfolio-box.component.html',
})
export class ProjectPortfolioBoxComponent implements OnInit {

  portfolioList: any[] = [
    {
      class : 'video',
      href: '#',
      img: '01.png',
      title:'Business Growth',
      type:'Video'
    },
    {
      class: 'html',
      href: '#',
      img: '02.png',
      title: 'Business Growth',
      type: 'HTML'
    },
    {
      class : 'design video',
      href: '#',
      img: '03.png',
      title:'Business Growth',
      type:'Design, Video'
    },
    {
      class : 'photography',
      href: '#',
      img: '04.png',
      title:'Business Growth',
      type:'Photography'
    },
    {
      class : 'design photography',
      href: '#',
      img: '01.png',
      title:'Business Growth',
      type:'Design, Photography'
    },
    {
      class : 'design photography',
      href: '#',
      img: '02.png',
      title:'Business Growth',
      type:'Design, Photography'
    },
    {
      class : 'design',
      href: '#',
      img: '03.png',
      title:'Business Growth',
      type:'Design'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
