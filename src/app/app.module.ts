import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowstructureComponent } from './browse/showstructure/showstructure.component';
import { FileselectedComponent } from './browse/fileselected/fileselected.component';
import { BrowseService} from './browse/browse.service';
import { FirstComponent } from './browse/first/first.component';
import { ShowComponent } from './browse/show/show.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ShowstructureComponent, FileselectedComponent, FirstComponent, AppComponent,  ShowComponent

  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
     HttpClientModule
  ],
  providers: [BrowseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
