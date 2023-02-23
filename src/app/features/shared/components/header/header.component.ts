import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('sidenav', {}) sidenav!: MatSidenav;
  constructor() {
  }

  openSideNav() {
    console.log('sidenav');
    this.sidenav.toggle().then(r => {
      console.log(r);
      document.getElementById("sidenavContainer");
    })

  }
}
