import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BrowseService {

  constructor(private http: HttpClient) {
  }
  private apiurl_structure = 'http://localhost:8090//showstructure?path=';
  private apiurl_content = 'http://localhost:8090//showcontent?path=';
  private apiurl_more_content = 'http://localhost:8090//showmorecontent?path=';
showStructure(path: string): Observable<string[]> {

 const url = `${this.apiurl_structure}${path}`;
 console.log(url);
console.log(this.http.get<string[]>(url));
 return this.http.get<string[]>(url)
 .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

}
  showContent(path: string): Observable<string[]> {

 const url = `${this. apiurl_content}${path}`;
 console.log(url);
console.log(this.http.get<string[]>(url));
 return this.http.get<string[]>(url)
.catch((error: any) => Observable.throw(error.json().error || 'Server error'));

}
    showMoreContent(path: string): Observable<string[]> {

 const url = `${this.apiurl_more_content}${path}`;
 console.log(url);
console.log(this.http.get<string[]>(url));
 return this.http.get<string[]>(url)
.catch((error: any) => Observable.throw(error.json().error || 'Server error'));

}
}
