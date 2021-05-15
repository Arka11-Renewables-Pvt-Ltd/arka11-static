import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html'
})
export class AchievementsComponent implements OnInit {
  titleSectionProp: any = {
    class:'text-center',
    title: 'Achivements',
    subTitle: '',
    description: ''
  };
  List: any[] = [
    {
      img:  "Logo-IAF-solid.jpg",
      name: "Indian Achievers' Forum",
      description: "Congratulations on winning “Indian Achievers' Award for Emerging Company, 2020 You really deserved this honour for your Achievement and Contribution in Nation Building. I am sure this will motivate you to further excel in your field and inspire others as well."
    },
    {
      img:  "Logo-IAA-solid.jpg",
      name: "Indian Achievers Award",
      description: ""
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
