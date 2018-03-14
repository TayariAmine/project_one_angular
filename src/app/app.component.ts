import { UserService } from './browse/services/user.service';
import { Component, ChangeDetectorRef, AfterViewChecked, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements AfterViewChecked {
//    title = 'Angular SpringBoot JWT integration';
//
//  constructor(private router: Router, private userService: UserService, private cdRef: ChangeDetectorRef) {
//
//  }
//
//  ngAfterViewChecked() {
//    // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
//    this.cdRef.detectChanges();
//  }
//
//  logout() {
//    this.userService.logout();
//    this.router.navigate(['/login']);
//  }
//
//  get isAdminUser() {
//    return this.userService.isAdminUser();
//  }
//
//  get isUser() {
//    return this.userService.isUser();
//  }
//
// }
export class AppComponent implements OnInit {
    title = 'Angular SpringBoot JWT integration';

  constructor() {

  }
  ngOnInit() {
  }


}
