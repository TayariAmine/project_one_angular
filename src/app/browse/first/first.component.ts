import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  file_name: string;


  constructor(private router: Router) {

  }


  ngOnInit() {
  }

 goto(name: string) {

   this.file_name = name;
   console.log(this.file_name);
   localStorage.setItem('the_file_name', this.file_name);
 this.router.navigate(['filename']);


}

}
