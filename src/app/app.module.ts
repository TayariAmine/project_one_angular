import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShowstructureComponent} from './browse/showstructure/showstructure.component';
import {BrowseService} from './browse/browse.service';
import {FileselectedComponent} from './browse/fileselected/fileselected.component';
import { FilterComponent } from './browse/filter/filter.component';
import {FirstComponent} from './browse/first/first.component';
import {AdminAuthGuard} from './browse/guards/admin-auth-guard.service';
import {AuthGuard} from './browse/guards/auth-guard.service';
import { JoinComponent } from './browse/join/join.component';
import {LoginComponent} from './browse/login/login.component';
import {TOKEN_NAME} from './browse/services/auth.constant';
import {AuthenticationService} from './browse/services/authentication.service';
import {UserService} from './browse/services/user.service';
import {ShowComponent} from './browse/show/show.component';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';





export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    ShowstructureComponent,
    FileselectedComponent,
    FirstComponent,
    AppComponent,
    ShowComponent,
    LoginComponent,
    FilterComponent,
    JoinComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    BrowseService,
    AuthenticationService,
    AuthGuard,
    AdminAuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
