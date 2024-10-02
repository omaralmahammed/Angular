import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubServiceComponent } from './sub-service/sub-service.component';
import { LectureComponent } from './lecture/lecture.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubServiceDeatailsComponent } from './sub-service-deatails/sub-service-deatails.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServiceComponent,
    SubServiceComponent,
    LectureComponent,
    SubscriptionComponent,
    SubServiceDeatailsComponent,
    RegistrationUserComponent,
    LoginUserComponent,
    AddServicesComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "services", component: ServiceComponent },
      { path: "subservices/:id", component: SubServiceComponent },
      { path: "subservicedetails/:id", component: SubServiceDeatailsComponent },
      { path: "lecture", component: LectureComponent },
      { path: "subscription/:id", component: SubscriptionComponent },
      { path: "register", component: RegistrationUserComponent },
      { path: "login", component: LoginUserComponent },
      {
        path: "dashboard", component: DashboardComponent, children: [
          { path: "", component: ServiceComponent },
          { path: "services", component: ServiceComponent },
          { path: "addService", component: AddServicesComponent },
      ] },

    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
