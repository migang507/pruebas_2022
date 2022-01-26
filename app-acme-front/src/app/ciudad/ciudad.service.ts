import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Ciudad } from './ciudad';
@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiURL = "http://localhost:8000/api/ciudad/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Ciudad[]> {
    return this.httpClient.get<Ciudad[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  create(ciudad): Observable<Ciudad> {
    return this.httpClient.post<Ciudad>(this.apiURL, JSON.stringify(ciudad), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  find(id): Observable<Ciudad> {
    return this.httpClient.get<Ciudad>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  update(id, ciudad): Observable<Ciudad> {
    return this.httpClient.put<Ciudad>(this.apiURL + id, JSON.stringify(ciudad), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  delete(id){
    return this.httpClient.delete<Ciudad>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
