import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  titleSectionProp: any = {
    class:'text-center',
    title: 'OUR HISTORY',
    subTitle: 'Xamin Company History',
    description: ''
  };

  List: any[] = [
    // {
    //     class:  "bg-gray",
    //     img :   "01.png",
    //     year :  "2012 - 2013",
    //     desc :  "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages."
    // },
    // {
    //     class:  "border",
    //     img :   "07.png",
    //     year :  "2013 - 2014",
    //     desc :  "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages."
    // },
    // {
    //     class:  "bg-gray",
    //     img :   "03.png",
    //     year :  "2014 - 2015",
    //     desc :  "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages."
    // },
    // {
    //     class:  "border",
    //     img :   "02.png",
    //     year :  "2015 - 2016",
    //     desc :  "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages."
    // },
    {
      class: "bg-gray",
      img:  "Logo-IAF-solid.jpg",
      name: "Indian Achievers' Forum",
      desc: "Congratulations on winning “Indian Achievers' Award for Emerging Company, 2020 You really deserved this honour for your Achievement and Contribution in Nation Building. I am sure this will motivate you to further excel in your field and inspire others as well."
    },
    {
      class:  "border",
      img:  "Logo-IAA-solid.jpg",
      name: "Indian Achievers Award",
      desc: ""
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
