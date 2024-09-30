import { Component } from '@angular/core';
import { ServicesURLService } from '../services-url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-service-deatails',
  templateUrl: './sub-service-deatails.component.html',
  styleUrl: './sub-service-deatails.component.css'
})
export class SubServiceDeatailsComponent {

  parameter: any

  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");

    this.getDetails(this.parameter)
  }
  constructor(private servicesURLService: ServicesURLService, private _route: ActivatedRoute) { }

  serviceDetails: any

  getDetails(id: number) {
    this.servicesURLService.GetSubServiceDetails(id).subscribe((data) => {
      this.serviceDetails = data
      console.log("this.serviceDetails", this.serviceDetails)
    })
  }
}
