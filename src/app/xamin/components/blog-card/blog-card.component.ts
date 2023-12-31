import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent implements OnInit {

  @Input() grid : string;
  List: any[] = [
    {
      img:"02.png",
      name:  "HTML",
      time: "September 26, 2019 ",
      title: "Build Construction",
      desc: "“They bring to you a host of beautifully created infographics that contain the latest digital marketing ",
    },
    {
      img:"03.png",
      name:  "Design",
      time: "September 26, 2019 ",
      title: "Life Lack Meaning",
      desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
    },
    {
      img:"04.png",
      name:  "HTML",
      time: "September 26, 2019 ",
      title: "Construction industry",
      desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing",
    },
    {
      img:"05.png",
      name:  "CSS",
      time: "September 26, 2019 ",
      title: "Content Marketing",
      desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
