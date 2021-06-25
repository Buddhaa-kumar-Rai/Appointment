import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectUserComponent } from './select-user/select-user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AppointmentsPageComponent } from './appointments-page/appointments-page.component';
import { CreatPageComponent } from './creat-page/creat-page.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { UpdateadminListComponent } from './updateadmin-list/updateadmin-list.component';
import { UpdateuserListComponent } from './updateuser-list/updateuser-list.component';
import { AuthService } from './appService/auth.service';
import { AuthGuardssGuard } from './appService/auth-guardss.guard';
import { ViewuserRequestComponent } from './viewuser-request/viewuser-request.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { StatusComponent } from './status/status.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SelectUserComponent,
    DashboardComponent,
    AdminpageComponent,
    AppointmentsPageComponent,
    CreatPageComponent,
    AdminSigninComponent,
    UpdateadminListComponent,
    UpdateuserListComponent,
    ViewuserRequestComponent,
    UpdateRequestComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [AuthService,AuthGuardssGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
