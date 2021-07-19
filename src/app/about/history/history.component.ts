import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  imgDest:any;
  titleSectionProp: any = {
    class: 'text-center',
    title: 'Awards Achieved',
    subTitle: '',
    description: ''
  };

  List: any[] = [
    {
      id: "iaa",
      class: "bg-gray",
      img: "Achieve-IAA-black.jpg",
      name: "Indian Achievers' Forum",
      desc: `"Congratulations on winning Indian Achievers' <a href="https://www.iafindia.com/mr-ashok-chowdary/" target="_blank">Award</a> for Emerging Company, 2020 You really deserved this honour for your Achievement and Contribution in Nation Building." - <a href="https://www.iafindia.com/" target="_blank">Indian Achievers Forum</a>`
    },
    {
      id: "startup-india",
      class: "bg-gray",
      img: "Startup_India.jpg",
      name: "Startup India",
      //desc: `"Congratulations on winning Startup India' <a href="javascript:void(0);" target="_blank">Award</a> for Emerging Company, 2021 You really deserved this honour for your Achievement and Contribution in Nation Building." - <a href="javascript:void(0);" target="_blank">Startup India</a>`
      desc: `"Recognised as a Startup by Department for Promotion of Industry and Internal Trade" in Renewable Solutions sector – StartupIndia`
    },
    {
      id: "silicon-india",
      class: "bg-gray",
      img: "Silicon_India.jpg",
      name: "Silicon India",
      //desc: `"Congratulations on winning Silicon India' <a href="https://startup.siliconindia.com/ranking/10-best-green-energy-startups-2021-rid-1197.html" target="_blank">Award</a> for Emerging Company, 2020 You really deserved this honour for your Achievement and Contribution in Nation Building." - <a href="javascript:void(0);" target="_blank">Silicon India</a>`
      desc: `"One of Top 10 Best Green Energy Statups 2021" - <a href="https://startup.siliconindia.com/ranking/10-best-green-energy-startups-2021-rid-1197.html" target="_blank">Silicon India Startup city.</a>`
    },
    {
      id: "nmims",
      class: "bg-gray",
      img: "NMIMS.jpg",
      name: "NMIMS",
      desc: `"Selected Amongst the top 100 Business Plans" – NMIMS, Mumbai`
      //desc: `"Congratulations on winning NMIMS' <a href="javascript:void(0);" target="_blank">Award</a> for Emerging Company, 2020 You really deserved this honour for your Achievement and Contribution in Nation Building." - <a href="javascript:void(0);" target="_blank">NMIMS</a>`
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  zoomImg(event){
    this.imgDest=event?.currentTarget?.currentSrc;
  }
}
