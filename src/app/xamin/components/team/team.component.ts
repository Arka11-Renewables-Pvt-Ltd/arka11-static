import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {

  List: any[] = [
    {
      img:  "2.jpg",
      name: "P Ashok Chowdary",
      position: "Founder & CEO",

    },
    {
      img:  "3.jpg",
      name: "P Chanakya Chowdary",
      position: "Co-Founder & Head IT",

    },
    {
      img:  "4.jpg",
      name: "G Sridhar Kumar",
      position: "COO",

    },
    {
      img:  "5.jpg",
      name: "Vinod",
      position: "Business Advisor",

    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
