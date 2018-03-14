import {AppComponent} from './app.component';
import {FileselectedComponent} from './browse/fileselected/fileselected.component';
import { FilterComponent } from './browse/filter/filter.component';

import {FirstComponent} from './browse/first/first.component';
import {AdminAuthGuard} from './browse/guards/admin-auth-guard.service';
import {AuthGuard} from './browse/guards/auth-guard.service';
import { JoinComponent } from './browse/join/join.component';
import {LoginComponent} from './browse/login/login.component';
import {ShowComponent} from './browse/show/show.component';
import {ShowstructureComponent} from './browse/showstructure/showstructure.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'filename', component: FileselectedComponent},
  {path: 'filename/showstructure', component: ShowstructureComponent, canActivate: [AuthGuard]},
  {path: 'filename/showcontent', component: ShowComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'first', component: FirstComponent},
  {path: 'login', component: LoginComponent},
    {path: 'filter', component: FilterComponent},
      {path: 'join', component: JoinComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

