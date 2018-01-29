import {BrowseService} from '../browse.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  name: string;
  content: string[];
  constructor(private browseservice: BrowseService) {}

  ngOnInit() {
    this.name = localStorage.getItem('the_file_name');
    this.getContent();
  }
  getContent() {
    this.browseservice.showContent(localStorage.getItem('the_file_name')).subscribe(data => {
      this.content = data;
    },
      err => {
        console.log(err);
      }

    );
  }
    getMoreContent() {
    this.browseservice.showMoreContent(localStorage.getItem('the_file_name')).subscribe(data => {
      this.content = data;
    },
      err => {
        console.log(err);
      }

    );
  }

}
