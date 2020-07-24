import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PluginsService} from "../../xamin/plugins.service";
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-solar-calculator',
  templateUrl: './solar-calculator.component.html',
  styleUrls: ['./solar-calculator.component.css']
})
export class SolarCalculatorComponent implements OnInit {

  data : any = {
    title:"Solar Calculator",
    img:"10.png"
  };

  List : any[] = [
    {
      img:"01.png",
      desc:"Save on Electricity Bills"
    },
    {
      img:"02.png",
      desc:"Generate Your Own Power"
    },
    {
      img:"03.png",
      desc:"Save Trees & Reduce Pollution"
    },
    {
      img:"04.png",
      desc:"Reduce Your Carbon Footprint"
    },

  ];

  @ViewChild('target') target: ElementRef;

  in: any = {type: ''};
  out: any = {paybackTime: {}};
  error: string;
  success: string;
  charges = 80;
  residentialUnitPrices = [5, 5, 7.2, 8.5, 9, 9, 9, 9, 9.5];
  commercialUnitsPrices  = [7.5, 8.9, 8.9, 9.4, 9.4, 10];
  unitsPerMonthPerkW = 145;
  treesPerkWPerYear = 6.15;
  carbonReducedPerUnit = 0.0005;

  constructor(private plugins: PluginsService, private config: ConfigService, private http: HttpClient) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  getUnitPrice(slab: number, type: string) {
    if (type == 'residential') {
      if (slab < this.residentialUnitPrices.length) {
        return this.residentialUnitPrices[slab]
      } else {
        return this.residentialUnitPrices[this.residentialUnitPrices.length - 1]
      }
    } else if (type == 'commercial') {
      if (slab < this.commercialUnitsPrices.length) {
        return this.commercialUnitsPrices[slab]
      } else {
        return this.commercialUnitsPrices[this.commercialUnitsPrices.length - 1]
      }
    }
  }

  getUnits(bill: number, type: string) {
    let units = 0;
    let i = 0
    let cBill = this.charges;
    while (cBill < bill) {
      if ((bill - cBill) < this.getUnitPrice(i, type) * 100) {
        units += Math.round((bill - cBill) / this.getUnitPrice(i, type))
        cBill = bill
      } else {
        units += 100
        cBill += 100 * this.getUnitPrice(i, type)
      }
      i++
    }
    console.log('units: ', units)
    return units
  }

  getBill(units: number, type: string) {
    let bill = 0;
    let i = 0;
    let cUnits = 0;
    while (cUnits < units) {
      if ((units - cUnits) < 100) {
        bill += Math.round((units - cUnits) * this.getUnitPrice(i, type) * 100) / 100
        cUnits = units
      } else{
        cUnits += 100;
        bill += 100 * this.getUnitPrice(i, type);
      }
      i++;
    }
    console.log('bill: ', bill)
    return bill
  }

  getData(form) {
    if (form.invalid) {
      return;
    }
    let units = this.getUnits(this.in.bill, this.in.type);
    
    this.out.systemSize = Math.round(units / this.unitsPerMonthPerkW * 100) / 100;

    if (this.in.type == 'commercial') {
      this.out.systemSize = Math.round(this.out.systemSize * 0.8 * 100) / 100;
    }

    this.out.roofArea = Math.round(this.out.systemSize * 100);

    if ( this.in.roofArea < this.out.roofArea ) {
      this.out.roofArea = Math.round(this.in.roofArea);
      this.out.systemSize = Math.round(this.in.roofArea) / 100;
    }

    this.out.estimate = this.out.systemSize * 52000;

    this.out.treesSaved = Math.round(this.treesPerkWPerYear * this.out.systemSize * 25);

    this.out.monthlyUnits = Math.round(this.out.systemSize * this.unitsPerMonthPerkW);;

    this.out.carbonFootprint = this.out.monthlyUnits * 12 * 25 * this.carbonReducedPerUnit; // 25 years
    console.log('O&M charge: ', (this.out.estimate * 3 / 100 / 12))
    this.out.monthlySavings = this.in.bill - 30 - (this.out.estimate * 3 / 100 / 12) - this.getBill(units - this.out.monthlyUnits, this.in.type);

    this.out.totalSavings = this.out.monthlySavings * 12 * 25;

    let totalMonths = Math.round(this.out.estimate / this.out.monthlySavings)

    this.out.paybackTime = {years: Math.floor( totalMonths / 12 ), months: ( totalMonths % 12 )};

    this.out.roi = (this.in.bill * 12 / this.out.estimate) * 100;
    
    this.target.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

}