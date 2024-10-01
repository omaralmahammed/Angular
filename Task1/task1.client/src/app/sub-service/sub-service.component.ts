import { Component } from '@angular/core';
import { ServicesURLService } from '../services-url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-service',
  templateUrl: './sub-service.component.html',
  styleUrl: './sub-service.component.css'
})
export class SubServiceComponent {


  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");

    this.getSubServices(this.parameter)
  }
  constructor(private servicesURLService: ServicesURLService, private _route: ActivatedRoute) { }

  parameter: any
  arrayOfData: any

  getSubServices(id:number) {
    this.servicesURLService.GetSubServicesByServiceId(id).subscribe((data) => {
      this.arrayOfData = data
      console.log("this.arrayOfData", this.arrayOfData)
    })
  }




  
}
