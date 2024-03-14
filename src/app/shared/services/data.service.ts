import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { map, catchError, timeout } from 'rxjs/operators';

@Injectable({
     providedIn: 'root'
})
export class DataService extends BaseService {
     public headers: HttpHeaders;

     constructor(protected _http: HttpClient) {
          super();
     }
     public getComments() {
          let url: string = 'https://jsonplaceholder.typicode.com/comments';
          return this._http.get(url).pipe(map(this.handleMap), catchError(this.handleError));
     }
     public getUser() {
          let url: string = 'https://jsonplaceholder.typicode.com/users';
          return this._http.get(url).pipe(map(this.handleMap), catchError(this.handleError));
     }
}
