import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PluginsService } from 'src/app/xamin/plugins.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html'
})
export class PortfolioDetailsComponent implements OnInit {

  data : any = {
    title:"Portfolio Details",
    img:"09.png"
  };

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
  index:any;
  constructor(public route: ActivatedRoute, private router: Router,private plugins: PluginsService) {
    this.index==this.route.snapshot.params['p_id'];
   } 
  
  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
