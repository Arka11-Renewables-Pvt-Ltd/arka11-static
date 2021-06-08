import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { PluginsService } from 'src/app/xamin/plugins.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html'
})
export class PortfolioDetailsComponent implements OnInit {

  data: any = {
    title: "Portfolio Details"
  };
  index: any;
  List:any=[];
  portfolioDetails:any;
  constructor(private httpClient: HttpClient, public route: ActivatedRoute, private router: Router, private plugins: PluginsService) {
    this.index = this.route.snapshot.params['p_id'];
  }
  ngOnInit() {
    const current = this;
    setTimeout(function () {
      current.plugins.index();
    }, 200);
    this.httpClient.get("assets/portfolio-data.json").subscribe(data =>{
      this.List=data;
      this.portfolioDetails=this.List[this.index];
      this.data.img="../portfolio/"+this.portfolioDetails.img;
    });
  }

}
