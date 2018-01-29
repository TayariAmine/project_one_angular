import { AppComponent } from './app.component';
import { FileselectedComponent } from './browse/fileselected/fileselected.component';
import { FirstComponent } from './browse/first/first.component';
import { ShowComponent } from './browse/show/show.component';
import { ShowstructureComponent } from './browse/showstructure/showstructure.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path: 'filename', component: FileselectedComponent},
  {path: 'filename/showstructure', component:  ShowstructureComponent},
  {path: 'filename/showcontent', component: ShowComponent},
  {path: 'first', component: FirstComponent},
  {path: '', component: AppComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

