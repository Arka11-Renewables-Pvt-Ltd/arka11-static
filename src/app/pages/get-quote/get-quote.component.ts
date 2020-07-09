import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PluginsService} from "../../xamin/plugins.service";
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
})
export class GetQuoteComponent implements OnInit {

  data : any = {
    title:"Get Quote",
    img:"05.png"
  };

  states = {
    "AN":"Andaman and Nicobar Islands",
    "AP":"Andhra Pradesh",
    "AR":"Arunachal Pradesh",
    "AS":"Assam",
    "BR":"Bihar",
    "CG":"Chandigarh",
    "CH":"Chhattisgarh",
    "DN":"Dadra and Nagar Haveli",
    "DD":"Daman and Diu",
    "DL":"Delhi",
    "GA":"Goa",
    "GJ":"Gujarat",
    "HR":"Haryana",
    "HP":"Himachal Pradesh",
    "JK":"Jammu and Kashmir",
    "JH":"Jharkhand",
    "KA":"Karnataka",
    "KL":"Kerala",
    "LA":"Ladakh",
    "LD":"Lakshadweep",
    "MP":"Madhya Pradesh",
    "MH":"Maharashtra",
    "MN":"Manipur",
    "ML":"Meghalaya",
    "MZ":"Mizoram",
    "NL":"Nagaland",
    "OR":"Odisha",
    "PY":"Puducherry",
    "PB":"Punjab",
    "RJ":"Rajasthan",
    "SK":"Sikkim",
    "TN":"Tamil Nadu",
    "TS":"Telangana",
    "TR":"Tripura",
    "UP":"Uttar Pradesh",
    "UK":"Uttarakhand",
    "WB":"West Bengal"
  }

  installationTypes = ['Rooftop', 'Solar Farms']

  areas = ['']
  
  quote: any = {type: ''};
  error: string;
  success: string;

  constructor(private plugins: PluginsService, private config: ConfigService, private http: HttpClient) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  getQuote(form) {
    if(form.$invalid) { return; }

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Accept', 'application/json; charset=utf-8');

    let payload = {
      name: this.quote.name,
      toEmails: ['chanakya.prathi@gmail.com'],
      replyToEmails: [this.quote.email],
      phone: this.quote.phone,
      bill: this.quote.bill,
      type: this.quote.type,
      subject: 'Quotation Request',
      page: 'Quote'
    }

    return this.http.post(
      this.config.api,
      payload,
      {headers}
    ).subscribe(resp => {
      form.resetForm();
      this.success = 'Your request is sent. You will receive quotation in your email soon.'
    },
    err => {
      this.error = err.data
    });
  }

}
