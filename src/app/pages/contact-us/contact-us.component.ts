import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PluginsService} from "../../xamin/plugins.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {

  data : any = {
    title:"Contact us",
    img:"04.png"
  };
  messageApi = "https://ktyz28upu1.execute-api.ap-south-1.amazonaws.com/Prod/send"

  List : any[] =[
    {
      title:"Hyderabad Office",
      address:"LIG, B 212, Dr A S Rao Nagar ECIL Post, Near Dr A S Rao Nagar PO, Kapra, Hyderabad - 500062"
    }

  ]

  query: any = {};
  error: string;
  success: string;

  constructor(private plugins: PluginsService, private http: HttpClient) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  submitMessage(form) {
    if(form.$invalid) { return; }

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Accept', 'application/json; charset=utf-8');

    let payload = {
      name: this.query.name,
      toEmails: ['info@arka11.com'],
      replyToEmails: [this.query.email],
      subject: this.query.subject,
      message: this.query.message
    }

    return this.http.post(
      this.messageApi,
      payload,
      {headers}
    ).subscribe(resp => {
      form.resetForm();
      this.success = 'Your message is successfully sent.'
    },
    err => {
      this.error = err.data
    });
  }

}
