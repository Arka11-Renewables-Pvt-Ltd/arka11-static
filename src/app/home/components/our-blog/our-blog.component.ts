import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'BLOG',
    subTitle: 'Recent Blog',
    desc:'It is a long established fact that a reader will be distracted'
  };
  constructor() { }

  ngOnInit() {
  }

}
