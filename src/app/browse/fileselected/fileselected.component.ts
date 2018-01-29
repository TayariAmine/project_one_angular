import { FirstComponent } from '../first/first.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fileselected',
  templateUrl: './fileselected.component.html',
  styleUrls: ['./fileselected.component.css']
})


export class FileselectedComponent implements OnInit {
  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = localStorage.getItem('the_file_name');
  }
  goBack(): void {
  this.router.navigate(['first']);
  }

}
