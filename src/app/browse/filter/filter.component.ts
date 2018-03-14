import {BrowseService} from '../browse.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  name: string;
  query: string;
  filtered_content: string[];
  constructor(private browseservice: BrowseService) {}

  ngOnInit() {

    this.name = localStorage.getItem('the_file_name');


  }
  filter(field: string, value: string) {
    this.query = 'path='  + this.name + '&field_name=' + field + '&value=' + value;
    this.browseservice.filter(this.query)
      .subscribe(data => {
        this.filtered_content = data;
      },
      err => {
        console.log(err);
      }

      );

  }
}
