import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
})
export class PartnerComponent implements OnInit {
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Become a Channel Partner",
    img:"08.png"
  };

  partner: any = {}
  error: string;
  success: string;

  constructor(private plugins: PluginsService, private config: ConfigService, private http: HttpClient) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
  
  becomePartner(form) {
    if(form.$invalid) { return; }

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Accept', 'application/json; charset=utf-8');

    let payload = {
      name: this.partner.name,
      toEmails: ['chanakya.prathi@gmail.com'],
      replyToEmails: [this.partner.email],
      phone: this.partner.phone,
      company: this.partner.company,
      city: this.partner.city,
      subject: 'Channel Partner Request',
      message: this.partner.message,
      page: 'Partner'
    }

    return this.http.post(
      this.config.api,
      payload,
      {headers}
    ).subscribe(resp => {
      form.resetForm();
      this.success = 'Your request is sent.'
    },
    err => {
      this.error = err.data
    });
  }

}
