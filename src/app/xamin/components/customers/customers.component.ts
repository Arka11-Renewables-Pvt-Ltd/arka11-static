import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {

  List : any[] = [
    {
      img:  '1.png',

    },
    {
      img:  '2.png',

    },
    {
      img:  '3.png',

    },
    {
      img:  '4.png',

    },
    {
      img:  '1.png',

    },
    {
      img:  '2.png',

    },
  ];

  @Input() hover : boolean;

  constructor() { }

  ngOnInit() {
  }

}
