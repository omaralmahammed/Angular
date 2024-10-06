import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesURLService {

  constructor(private http: HttpClient) { }

  email: BehaviorSubject<string> = new BehaviorSubject<string>("null");
  emailaddress = this.email.asObservable();



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

  AddUserRegester(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Users/Register`, data)
  }

  UserLogin(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Users/Login`, data)
  }
  AddService(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Services/AddService`, data)
  }

  UpdateService(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/Services/UpdateServicesDetails/${id}`, data)
  }
}
