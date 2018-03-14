
import {BrowseService} from '../browse.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-fileselected',
  templateUrl: './fileselected.component.html',
  styleUrls: ['./fileselected.component.css']
})


export class FileselectedComponent implements OnInit {
  name: string;
  written: string[];
  file_tsv_csv: boolean;
  file_parquet: boolean;

  constructor(private router: Router, private browseservice: BrowseService) {}

  ngOnInit() {
    this.file_tsv_csv = false;
    this.file_parquet = false;
    this.name = localStorage.getItem('the_file_name');
    if (this.name.includes('tsv') || this.name.includes('csv')) {
      this.file_tsv_csv = true;
    } else if (this.name.includes('parquet')) {
      this.file_parquet = true;
    }


  }
  goBack(): void {
    this.router.navigate(['first']);
  }
  writetohdfs() {

    this.browseservice.write(this.name)
      .subscribe(data => {
        this.written = data;
      },
      err => {
        console.log(err);
      }

      );

  }
}
