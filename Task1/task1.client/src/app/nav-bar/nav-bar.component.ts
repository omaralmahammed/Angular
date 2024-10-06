import { Component } from '@angular/core';
import { ServicesURLService } from '../services-url.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  constructor( private _ser: ServicesURLService) { }


  email: any;

  ngOnInit() {

    this._ser.emailaddress.subscribe((data) => {

      this.email = data

    }) 
  }

  Logout() { 
    this.email = 'null';
  }

}
