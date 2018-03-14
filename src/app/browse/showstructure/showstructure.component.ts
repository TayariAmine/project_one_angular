import {Component, OnInit} from '@angular/core';
import {BrowseService} from '../browse.service';
import {HttpClient} from '@angular/common/http';

@Component({

  selector: 'app-showstructure',
  templateUrl: './showstructure.component.html',
  styleUrls: ['./showstructure.component.css']
})
export class ShowstructureComponent implements OnInit {
  name: string;
  struct: string[];
  constructor(private browseservice: BrowseService) {}

  ngOnInit() {
    console.log(localStorage.getItem( 'access_token') + 'fun fun');
    this.name = localStorage.getItem('the_file_name');
    this.getStructure();

  }
  getStructure() {
    this.browseservice.showStructure(localStorage.getItem('the_file_name')).subscribe(data => {
      this.struct = data;
    },
      err => {
        console.log(err);
      }

    );
  }

}
