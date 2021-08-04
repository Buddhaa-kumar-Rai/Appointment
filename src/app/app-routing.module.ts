import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AboutComponent } from './about/about.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AppointmentsPageComponent } from './appointments-page/appointments-page.component';
import { AuthGuardssGuard } from './appService/auth-guardss.guard';
import { CreatPageComponent } from './creat-page/creat-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebouncedDistnctComponent } from './observable/debounced-distnct/debounced-distnct.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchapComponent } from './observable/switchap/switchap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { SelectUserComponent } from './select-user/select-user.component';

import { StatusComponent } from './status/status.component';
import { ToStudyComponent } from './to-study/to-study.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { UpdateadminListComponent } from './updateadmin-list/updateadmin-list.component';
import { UpdateuserListComponent } from './updateuser-list/updateuser-list.component';
import { UsersComponent } from './users/users.component';
import { ViewuserRequestComponent } from './viewuser-request/viewuser-request.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LogInComponent},
  {path:'service', loadChildren:()=>import('./service/service.module').then(module=>module.ServiceModule)},
  {path:'about',loadChildren:()=>import('./about/about.module').then(module=>module.AboutModule)},
  {path:'selectuser',component:SelectUserComponent},
  {path:'dashb',component:DashboardComponent},
  {path:'admin',component:AdminpageComponent},
  {path:'appointpage',component:AppointmentsPageComponent},
  {path:'creat',canActivate:[AuthGuardssGuard], component:CreatPageComponent},
  {path:'adminsign',component:AdminSigninComponent},
  {path:'updateadmin/:id',component:UpdateadminListComponent},
  {path:'updateuser/:id',component:UpdateuserListComponent},
  {path:'vsr',component:ViewuserRequestComponent},
  {path:'status',component:StatusComponent},
  {path:'udr/:id',component:UpdateRequestComponent},

  {path:'observable',component:ObservableComponent},
  {path:'fromevent',component:FromEventComponent},
  {path:'interval',component:IntervalComponent},
  {path:'offrom',component:OfFromComponent},
  {path:'toarray',component:ToArrayComponent},
  {path:'custom',component:CustomComponent},
  {path:'map',component:MapComponent},
  {path:'pluck',component:PluckComponent},
  {path:'filter',component:FilterComponent},
  {path:'retry',component:RetryComponent},
  {path:'debounce',component:DebouncedDistnctComponent},
  {path:'subject',component:SubjectComponent},
  {path:'replaysubject',component:ReplaysubjectComponent},
  {path:'concat',component:ConcatComponent},
  {path:'mergemap',component:MergemapComponent},
  {path:'switchmap',component:SwitchapComponent},
  {path:'tostudy',component:ToStudyComponent},
  {path:'users',component:UsersComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
