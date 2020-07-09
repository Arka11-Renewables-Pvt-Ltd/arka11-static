import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    api: string = 'https://ktyz28upu1.execute-api.ap-south-1.amazonaws.com/Prod/send'
    toEmail: 'info@arka11.com'
    
    constructor() {

    }
}