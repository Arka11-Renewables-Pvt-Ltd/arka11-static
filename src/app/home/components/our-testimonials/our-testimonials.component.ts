import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-testimonials',
  templateUrl: './our-testimonials.component.html',
})
export class OurTestimonialsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Testimonials',
    subTitle: '100+ Companies are Using Xamin',
  };
  constructor() { }

  ngOnInit() {
  }

}
