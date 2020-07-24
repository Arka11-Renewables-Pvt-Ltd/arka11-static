import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
})
export class CardSectionComponent implements OnInit {

  List : any[] = [
    {
      img:"01.png",
      title:"Reliable & Scalable",
      sub_title:"We pursue relationships based on transparency, persistence, mutual trust and integrity with our employees, customers and other business partners."
    },
    {
      img:"02.png",
      title:"Customized",
      sub_title:"customized unique rooftop solar power solutions as per available space and depending on the power consumption of the building."
    },
    {
      img:"03.png",
      title:"Value Engineering",
      sub_title:"our in-house EPC allows us to enhance our system design expertise that optimizes both the system cost and power yield of the total solar block."
    },
    {
      img:"04.png",
      title:"Sustainability",
      sub_title:"we are committed to maintaining the highest ecological standards and making a positive impact on the communities we operate in."
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
