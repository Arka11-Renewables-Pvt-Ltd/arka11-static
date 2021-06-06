import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
})
export class OurTeamComponent implements OnInit {

  titleSectionProp: any = {
    class:'text-center',
    title: 'TEAM',
    subTitle: 'Management Team',
    description: ''
  };
  List: any[] = [
    {
      img:  "Ashok.jpg",
      name: "P Ashok Chowdary",
      position: "Founder & CEO",

    },
    {
      img:  "Chanakya.jpg",
      name: "P Chanakya Chowdary",
      position: "Co-Founder & Head IT",

    },
    {
      img:  "Sridhar.jpg",
      name: "G K Sridhar",
      position: "COO",

    },
    {
      img:  "1.jpg",
      name: "G Kumar",
      position: "Business Advisor",

    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
