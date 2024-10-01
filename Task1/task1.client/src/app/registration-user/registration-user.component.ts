import { Component } from '@angular/core';
import { ServicesURLService } from '../services-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrl: './registration-user.component.css'
})
export class RegistrationUserComponent {


  ngOnInit() { }

  constructor(private _ser: ServicesURLService, private _router: Router) { }

  

  addNewUser(data : any) {
    var formdata = new FormData();

    for (let item in data) {
      formdata.append(item, data[item])
    }

    this._ser.AddUserRegester(formdata).subscribe(() => {
      alert("User Add Successfuly!")
      this._router.navigate(['login']);
    },(error) => {
      alert(error.error)
    })
      
  }
}
