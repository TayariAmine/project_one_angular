import { FileselectedComponent } from './fileselected/fileselected.component';
import { FirstComponent } from './first/first.component';
import { ShowComponent } from './show/show.component';
import { ShowstructureComponent } from './showstructure/showstructure.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'filename', component: FileselectedComponent},
  {path: 'filename/showstructure', component:  ShowstructureComponent},
  {path: 'filename/showcontent', component: ShowComponent},
  {path: 'first', component: FirstComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
