import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html'
})
export class PortfoliosComponent implements OnInit {

  constructor() { }
  //enum ['Rooftop', 'Commercial', 'SolarPlant', 'Others']
  List: any[] = [
    {
      id: 0,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b1_deepak/deepak_1.jpg',
      title: 'Residential 3kw installation ASRao Nagar, Hyderabad',
      subtitle: 'panels installation',
      location: 'ASRao Nagar, Hyderabad',
      capacity: 3000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'The sun exchange project to lower living costs of hyderabad retirees, providing clean and affordable power to residential villas.',
      images: [
        'b1_deepak/deepak_1.jpg',
        'b1_deepak/deepak_2.jpg'
      ]
    },
    {
      id: 1,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b2_vamsi/vamsi_1.jpg',
      title: 'Residential 3kw installation ASRao Nagar, Hyderabad',
      subtitle: 'panels installation',
      location: 'ASRao Nagar, Hyderabad',
      capacity: 3000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'The sun exchange project to lower living costs of hyderabad retirees, providing clean and affordable power to residential villas.',
      images: [
        'b2_vamsi/vamsi_1.jpg',
        'b2_vamsi/vamsi_2',
        'b2_vamsi/vamsi_3.jpg'
      ]
    },
    {
      id: 2,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b3_mallikarjuna/malli_1.jpg',
      title: 'Residential 1kw installation cherlapalli, Hyderabad',
      subtitle: 'panels installation',
      location: 'Cherlapalli, Hyderabad',
      capacity: 1000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'The sun exchange project to lower living costs of hyderabad retirees, providing clean and affordable power to residential villas.',
      images: [
        'b3_mallikarjuna/malli_1.jpg'
      ]
    },
    {
      id: 3,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b4_prathap/prathap_1.jpg',
      title: 'Residential 1kw installation Cherlapalli, Hyderabad',
      subtitle: 'panels installation',
      location: 'Cherlapalli, Hyderabad',
      capacity: 1000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'The sun exchange project to lower living costs of hyderabad retirees, providing clean and affordable power to residential villas.',
      images: [
        'b4_prathap/prathap_1.jpg',
        'b4_prathap/prathap_2.jpg'
      ]
    },
    {
      id: 4,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b5_prasanth/prasanth_1.jpg',
      title: 'Residential 5kw installation Cherlapalli, Hyderabad',
      subtitle: 'panels installation',
      location: 'Cherlapalli, Hyderabad',
      capacity: 5000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: '100% green house, with roof garden and 5KWp solar power elevated setup on top of the garden - full utilization of the roof - self sustained with power and veggies @ hyderabad',
      images: [
        'b5_prasanth/prasanth_1.jpg',
        'b5_prasanth/prasanth_2.jpg'
      ]
    },
    {
      id: 5,
      class: 'others',
      href: 'portfolio/portfolio-details',
      img: 'b6_lvreddy/lvreddy_1.jpg',
      title: 'Sports desk 4kw installation Nagole, Hyderabad',
      subtitle: 'panels installation',
      location: 'Nagole, Hyderabad',
      capacity: 5000,
      type: 'Others',
      subType: 'ongrid',
      description: 'Every arena has to become self-sufficient power generation - 4KWp @ apr arena _ badminton court, nagole - hyderabad',
      images: [
        'b6_lvreddy/lvreddy_1.jpg',
        'b6_lvreddy/lvreddy_2.jpg'
      ]
    },
    {
      id: 6,
      class: 'commercial',
      href: 'portfolio/portfolio-details',
      img: 'b7_robotouch/robotouch_1.jpg',
      title: 'Commercial plant 20kw installation ECIL, Hyderabad',
      subtitle: 'panels installation',
      location: 'ECIL, Hyderabad',
      capacity: 20000,
      type: 'Commercial',
      subType: 'ongrid',
      description: 'Our client is impressed with the output, 20KWp elevated solar Power system. perfect example of optimal utilization of roof space - both for power generation as well as to walk around - @ ecil hyderabad',
      images: [
        'b7_robotouch/robotouch_1.jpg',
        'b7_robotouch/robotouch_2.jpg',
        'b7_robotouch/robotouch_3.jpg',
      ]
    },
    {
      id: 7,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b8_chevella/chevella_1.jpg',
      title: 'Residential 1kw offgrid installation Chevella, Hyderabad',
      subtitle: 'panels installation',
      location: 'Chevella, Hyderabad',
      capacity: 1000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: '1KWp loom solar off grid system at a remote site @ outer hyderabad',
      images: [
        'b8_chevella/chevella_1.jpg',
        'b8_chevella/chevella_2.jpg'
      ]
    },
    {
      id: 8,
      class: 'commercial',
      href: 'portfolio/portfolio-details',
      img: 'b9_yaseen/hybrid_1.jpg',
      title: 'Commercial 6kw hybrid installation Vattinagulapally, Hyderabad',
      subtitle: 'panels installation',
      location: 'Vattinagulapally, Hyderabad',
      capacity: 6000,
      type: 'Commercial',
      subType: 'ongrid',
      description: 'A hybrid solar power system is combination of on grid solar system and off grid solar system. it has battery backup in it to store power and it also have the ability to feed surplus electricity into main grid.',
      images: [
        'b9_yaseen/hybrid_1.jpg',
        'b9_yaseen/hybrid_2.jpg'
      ]
    },
    {
      id: 9,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b11_bifacial/krins_1.jpg',
      title: 'Bifacial 10kw  installation Krinss villas, Hyderabad',
      subtitle: 'panels installation',
      location: 'Krinss villas, Hyderabad',
      capacity: 10000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'Bifacial roof with waterproofing solution, perfect combination of aesthetics & power generation.',
      images: [
        'b11_bifacial/krins_1.jpg',
        'b11_bifacial/krins_2.jpg',
        'b11_bifacial/krins_3.jpg',
        'b11_bifacial/krins_4.jpg',
        'b11_bifacial/krins_5.jpg',
        'b11_bifacial/krins_6.jpg',
        'b11_bifacial/krins_7.jpg'
      ]
    },
    {
      id: 10,
      class: 'commercial',
      href: 'portfolio/portfolio-details',
      img: 'b12_Analinear/analinear_1.jpg',
      title: 'Commercial 10kw  installation Anali near GMR-Aerospace, Hyderabad',
      subtitle: 'panels installation',
      location: 'Anali near GMR-Aerospace, Hyderabad',
      capacity: 10000,
      type: 'Commercial',
      subType: 'ongrid',
      description: '10KWp installation @ gmr aerospace sez...',
      images: [
        'b12_Analinear/analinear_1.jpg',
        'b12_Analinear/analinear_2.jpg',
        'b12_Analinear/analinear_3.jpg'
      ]
    },
    {
      id: 11,
      class: 'commercial',
      href: 'portfolio/portfolio-details',
      img: 'b13_Girnar/girnar_1.jpg',
      title: 'Commercial 400kw  installation Girnar packaging, Naidupet, Nellore',
      subtitle: 'panels installation',
      location: 'Girnar packaging, Naidupet, Nellore',
      capacity: 4000000,
      type: 'Commercial',
      subType: 'ongrid',
      description: 'Industrial solar system installation provides the owner with a hedge against rising utility costs and reduced dependence on grid supply. With a high return on investment, solar ensures a secure financial future for business owners. It also has tremendous environmental benefits as it reduces greenhouse gas emissions.',
      images: [
        'b13_Girnar/girnar_1.jpg',
        'b13_Girnar/girnar_2.jpg',
        'b13_Girnar/girnar_3.jpg',
        'b13_Girnar/girnar_4.jpg',
        'b13_Girnar/girnar_5.jpg',
        'b13_Girnar/girnar_6.jpg'
      ]
    },
    {
      id: 12,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: '',
      title: 'Residential 1kw  installation Gudur, Nellore',
      subtitle: 'panels installation',
      location: 'Gudur, Nellore',
      capacity: 1000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'The Sun Exchange project to lower living costs of hyderabad retirees, providing clean and affordable power to residential villas.',
      images: [

      ]
    },
    {
      id: 13,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b15_devistana/kp_1.jpg',
      title: 'Residential 8kw  installation Devistan | Kukatpally, Hyderabad',
      subtitle: 'panels installation',
      location: 'Devistan | Kukatpally, Hyderabad',
      capacity: 8000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'The Sun Exchange project to lower living costs of hyderabad retirees, providing clean and affordable power to residential villas.',
      images: [
        'b15_devistana/kp_1.jpg',
        'b15_devistana/kp_2.jpg',
        'b15_devistana/kp_3.jpg'
      ]
    },
    {
      id: 14,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b16_Anit/anit_1.jpg',
      title: 'Residential(college) 5kw  installation ANIT | ORR, Hyderabad',
      subtitle: 'panels installation',
      location: 'ANIT | ORR, Hyderabad',
      capacity: 5000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'Solar panels for colleges have many benefits. in addition to decreasing an institution’s carbon footprint, solar panels also generate a great deal of power. Here are a few of the most significant benefits of solar panels for colleges:',
      images: [
        'b16_Anit/anit_1.jpg',
        'b16_Anit/anit_2.jpg'
      ]
    },
    {
      id: 15,
      class: 'commercial',
      href: 'portfolio/portfolio-details',
      img: 'b17_Bhuvanagiri/bhuvanagiri_1.jpg',
      title: 'Commercial 1kw  installation Bhuvanagiri, Hyderabad',
      subtitle: 'panels installation',
      location: 'Bhuvanagiri, Hyderabad',
      capacity: 1000,
      type: 'Commercial',
      subType: 'ongrid',
      description: 'When thinking about switching your commercial building to solar power, consider it an investment, not an expense. The return on investment you get from solar power often exceeds that of most other investments in terms of the money your business saves over the years.',
      images: [
        'b17_Bhuvanagiri/bhuvanagiri_1.jpg'
      ]
    },
    {
      id: 16,
      class: 'rooftop',
      href: 'portfolio/portfolio-details',
      img: 'b18_airport_1kw/airport_1.jpg',
      title: 'Residential 1kw  installation Airport, Hyderabad',
      subtitle: 'panels installation',
      location: 'Airport, Hyderabad',
      capacity: 1000,
      type: 'Rooftop',
      subType: 'ongrid',
      description: 'The Sun Exchange project to lower living costs of hyderabad retirees, providing clean and affordable power to residential villas.',
      images: [
        'b18_airport_1kw/airport_1.jpg',
        'b18_airport_1kw/airport_2.jpg',
        'b18_airport_1kw/airport_3.jpg'
      ]
    },
    {
      id: 17,
      class: 'others',
      href: 'portfolio/portfolio-details',
      img: 'b19_streetLamps/light_1.jpg',
      title: 'Solar street lamps 50w  installation Pasamylaram, Hyderabad',
      subtitle: 'Street lamps installation',
      location: 'Pasamylaram, Hyderabad',
      capacity: 50,
      type: 'Others',
      subType: 'ongrid',
      description: 'The solar LED light system as the name suggests converts energy from the sun into electricity and is easy to install and gives high intensity LED output.',
      images: [
        'b19_streetLamps/light_1.jpg',
        'b19_streetLamps/light_2.jpg',
        'b19_streetLamps/light_3.jpg'
      ]
    }
  ];
  ngOnInit(): void {
  }

}
