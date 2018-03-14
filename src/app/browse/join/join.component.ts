import {BrowseService} from '../browse.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  query: string;
  joined: string[];
  name: string;
  second_file: string;

  constructor(private browseservice: BrowseService) {}


  ngOnInit() {
    this.name = localStorage.getItem('the_file_name');
  }
  goto(name: string) {

    this.second_file = name;

  }
  join(field_one: string, field_two: string) {
    this.query = 'path=' + this.name + '&field_one=' + field_one + '&second_file=' + this.second_file + '&field_two=' + field_two;
    console.log(this.query);
    this.browseservice.join(this.query)
      .subscribe(data => {
        this.joined = data;
        console.log(this.joined);
      },
      err => {
        console.log(err);
      }

      );

  }
}

