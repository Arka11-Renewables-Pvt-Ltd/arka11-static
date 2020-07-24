import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-section',
  templateUrl: './calculator-section.component.html',
})
export class CalculatorSectionComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Savings Calculator',
    subTitle: 'How much energy do you use?',
    description: 'Use our solar panel calculator to quickly estimate your solar potential and savings. Estimates are based on your roof, electricity bill, and actual offers in your area. It would also provide you with lifetime savings and the amount of trees saved and your reduced arbon footprint.'
  };

  List: any = {
    isOuter: false,
    img: 'section.png',
  };

  constructor() { }

  ngOnInit() {
  }

}
