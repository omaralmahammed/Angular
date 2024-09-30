import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesURLService {

  constructor(private http: HttpClient) { }


  baseUrl = "https://localhost:7107/api"

  GetAllServices(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Services/GetAllServices`)
  }


  GetSubServicesByServiceId(id:number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Services/GetSubServicesByServiceId/${id}`)
  }

  GetSubServiceDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Services/GetSubServicesDetails/${id}`)
  }

  GetAllSubscriptions(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Subscription/GetAllSubscriptions`)
  }

  AddUserSubscription(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/UserSubscription/AddUserSubscription`, data)
  }
}
