import { Component } from '@angular/core';
import { ServicesURLService } from '../services-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  constructor(private _ser: ServicesURLService, private _router: Router) { }

  

  checkIfUserLogin(data: any) {
    var formdata = new FormData();

    for (let item in data) {
      formdata.append(item, data[item])
    }

    this._ser.UserLogin(formdata).subscribe((response: any) => {

      this._ser['email'].next(response.email);

      if (response.email == "admin1@gmail.com") {
        this._router.navigate(['/dashboard']);

      } else {
        this._router.navigate(['/']);
      }
    }, (error) => {
      alert(error.error)
    })
  }
}
