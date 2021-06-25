import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AppointmentsPageComponent } from './appointments-page/appointments-page.component';
import { AuthGuardssGuard } from './appService/auth-guardss.guard';
import { CreatPageComponent } from './creat-page/creat-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SelectUserComponent } from './select-user/select-user.component';

import { StatusComponent } from './status/status.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { UpdateadminListComponent } from './updateadmin-list/updateadmin-list.component';
import { UpdateuserListComponent } from './updateuser-list/updateuser-list.component';
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
  {path:'udr/:id',component:UpdateRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
