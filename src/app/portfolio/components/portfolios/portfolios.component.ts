import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html'
})
export class PortfoliosComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  //enum ['Rooftop', 'Commercial', 'SolarPlant', 'Others']
  List:any=[];
  serviceType:any={
    rooftop:0,
    commercial:0,
    solarPlant:0,
    others:0

  };
  ngOnInit(): void {
    this.httpClient.get("assets/portfolio-data.json").subscribe(data =>{
      console.log(data);
      this.List=data;
      this.List.forEach(element => {
        switch (element.type) {
          case "Rooftop":
            this.serviceType.rooftop++;
            break;
          case "Commercial":
            this.serviceType.commercial++;
            break;
          case "SolarPlant":
            this.serviceType.solarPlant++;
            break;
          default:
            this.serviceType.others++;
            break;
        }
      });
    });
  }
}
