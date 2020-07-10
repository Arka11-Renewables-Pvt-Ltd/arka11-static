import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PluginsService} from "../../xamin/plugins.service";
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-solar-calculator',
  templateUrl: './solar-calculator.component.html',
})
export class SolarCalculatorComponent implements OnInit {

  data : any = {
    title:"Solar Calculator",
    img:"09.png"
  };

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
      toEmails: [this.config.toEmail],
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