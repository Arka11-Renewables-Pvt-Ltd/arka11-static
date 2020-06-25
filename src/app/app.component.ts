import { Component } from '@angular/core';
import { PluginsService } from './xamin/plugins.service';
import {Router, NavigationEnd} from '@angular/router';
import { topMenuBarItems } from '../constants/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  logoImage = '/assets/images/logo.png';
  logoImageFooter = '/assets/images/logo-footer.png';
  contactInfo: any = {
    contactNumber: '+91 7702302411',
    email: 'info@arka11.com',
    address: `LIG, B 212, Dr A S Rao Nagar ECIL Post, Near Dr A S Rao Nagar PO, Kapra, Hyderabad - 500062`
  };

  constructor(private plugins: PluginsService, private router: Router) { }

  title = 'Arka11';
  public navItems: any = topMenuBarItems;

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
