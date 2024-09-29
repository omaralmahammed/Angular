import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubServiceComponent } from './sub-service/sub-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServiceComponent,
    SubServiceComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "services", component: ServiceComponent },
      { path: "subservices/:id", component: SubServiceComponent },

    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
