import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import {Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';
@Injectable()
export class BrowseService {

  constructor(private http: AuthHttp) {
  }
  private apiurl_structure = 'http://localhost:8090//showstructure?path=';
  private apiurl_content = 'http://localhost:8090//showcontent?path=';
  private apiurl_more_content = 'http://localhost:8090//showmorecontent?path=';
  private apiurl_filter = 'http://localhost:8090//filter?';
  private apiurl_join = 'http://localhost:8090//join?';
  private apiurl_write = 'http://localhost:8090//write?';

  write(path: string): Observable<string[]> {
    const url = `${this.apiurl_write}${path}`;



    return this.http.get(url).map(res => res.json()).
      catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  filter(path: string): Observable<string[]> {
    const url = `${this.apiurl_filter}${path}`;
    console.log(url);
    console.log(this.http.get(url));

    return this.http.get(url).map(res => res.json()).
      catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  join(path: string): Observable<string[]> {
    const url = `${this.apiurl_join}${path}`;

    console.log(url);


    return this.http.get(url).map(res => res.json()).
      catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  showStructure(query: string): Observable<string[]> {
    const url = `${this.apiurl_structure}${query}`;
console.log(this.http.get(url));


    return this.http.get(url).map(res => res.json()).
      catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  showContent(path: string): Observable<string[]> {

    const url = `${this.apiurl_content}${path}`;

    return this.http.get(url).map(res => res.json()).
      catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  showMoreContent(path: string): Observable<string[]> {

    const url = `${this.apiurl_more_content}${path}`;

    return this.http.get(url).map(res => res.json()).
      catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
