import { Component } from '@angular/core';
import { ServicesURLService } from '../services-url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

  subServiceId: any

  ngOnInit() {
    this.subServiceId = this._route.snapshot.paramMap.get("id");

    this.getSubscriptions()
  }
  constructor(private servicesURLService: ServicesURLService, private _route: ActivatedRoute) { }

  arrayOfData: any

  getSubscriptions() {
    this.servicesURLService.GetAllSubscriptions().subscribe((data) => {
      this.arrayOfData = data
      console.log("this.arrayOfData", this.arrayOfData)
    })
  }

  subscriptionData =
  {
   "userId": 42,
   "subServiceId": 2,
   "scriptionId": 2
  }

  AddSubscription(id: number) {
    this.subscriptionData.scriptionId = id;
    this.subscriptionData.subServiceId = this.subServiceId;

    this.servicesURLService.AddUserSubscription(this.subscriptionData).subscribe(() => {
      alert("Subscribe Successfuly!")
    })
  }

}
