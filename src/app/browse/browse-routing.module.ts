
import {FileselectedComponent} from './fileselected/fileselected.component';
import { FilterComponent } from './filter/filter.component';
import {FirstComponent} from './first/first.component';
import {AdminAuthGuard} from './guards/admin-auth-guard.service';
import {AuthGuard} from './guards/auth-guard.service';
import { JoinComponent } from './join/join.component';
import {LoginComponent} from './login/login.component';
import {ShowComponent} from './show/show.component';
import {ShowstructureComponent} from './showstructure/showstructure.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'filename', component: FileselectedComponent},
  {path: 'filename/showstructure', component: ShowstructureComponent, canActivate: [AuthGuard]},
  {path: 'filename/showcontent', component: ShowComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'first', component: FirstComponent},
  {path: 'login', component: LoginComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'join', component: JoinComponent},


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule {}
