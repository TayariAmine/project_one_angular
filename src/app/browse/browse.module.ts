import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { FileselectedComponent } from './fileselected/fileselected.component';
import { ShowstructureComponent } from './showstructure/showstructure.component';
import { FirstComponent } from './first/first.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  imports: [
    CommonModule,
    BrowseRoutingModule
  ],
  declarations: [ShowstructureComponent, FileselectedComponent, FirstComponent, ShowComponent ]
})
export class BrowseModule { }
