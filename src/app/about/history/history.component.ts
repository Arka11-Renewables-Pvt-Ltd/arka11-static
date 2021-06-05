import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  titleSectionProp: any = {
    class:'text-center',
    title: 'Awards Achieved',
    subTitle: '',
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
      img:  "Achieve-IAA-black.jpg",
      name: "Indian Achievers' Forum",
      desc: `"Congratulations on winning Indian Achievers' <a href="https://www.iafindia.com/mr-ashok-chowdary/" target="_blank">Award</a> for Emerging Company, 2020 You really deserved this honour for your Achievement and Contribution in Nation Building." - <a href="https://www.iafindia.com/" target="_blank">Indian Achievers Forum</a>`
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
