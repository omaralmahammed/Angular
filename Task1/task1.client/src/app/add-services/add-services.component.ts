import { Component } from '@angular/core';
import { ServicesURLService } from '../services-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrl: './add-services.component.css'
})
export class AddServicesComponent {

  imageFile : any 
  changeImage(event: any) {
    
    this.imageFile = event.target.files[0]
    
  }

  constructor(private _ser: ServicesURLService, private _router: Router) { }

  AddNewService(data: any) {
    var formdata = new FormData();


    for (let item in data) {
      formdata.append(item, data[item])
    }

    formdata.append("ServiceImage", this.imageFile)

    this._ser.AddService(formdata).subscribe((data) => {
      alert("Service add successfully!")
      this._router.navigate(['/services']);
    }, (error) => {
      alert(error.error)
    })
  }
}
