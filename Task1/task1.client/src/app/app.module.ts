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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServiceComponent,
    SubServiceComponent,
    LectureComponent,
    SubscriptionComponent,
    SubServiceDeatailsComponent
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

    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
