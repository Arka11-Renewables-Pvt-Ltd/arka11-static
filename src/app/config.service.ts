import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    api: string = 'https://ktyz28upu1.execute-api.ap-south-1.amazonaws.com/Prod/send'
    toEmail: 'info@arka11.com'

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
    
    constructor() {

    }
}