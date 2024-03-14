import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ResponseModel } from '../models/response-model';

@Injectable({
     providedIn: 'root'
})
export class BaseService {
     constructor() { }

     protected handleMap(response: any) {
          return new ResponseModel(response);
     }

     protected handleError(response: HttpErrorResponse) {
          let error = {
               status: response.error ? response.error.Status : null,
               message: response.error ? response.error.Message : null,
               errors: response.error && response.error.errors ? response.error.errors : null,
               code: response.status
          };

          return throwError(() => {
               return error;
          });
     }
}
