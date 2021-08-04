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
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncedDistnctComponent } from './observable/debounced-distnct/debounced-distnct.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { SwitchapComponent } from './observable/switchap/switchap.component';
import { ToStudyComponent } from './to-study/to-study.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { UsersComponent } from './users/users.component';

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
    StatusComponent,
    ObservableComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    RetryComponent,
    DebouncedDistnctComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaysubjectComponent,
    ConcatComponent,
    MergemapComponent,
    SwitchapComponent,
    ToStudyComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([UserEffects]),
    
  ],
  providers: [AuthService,AuthGuardssGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
