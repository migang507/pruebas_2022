import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Conductor } from './conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  private apiURL = "http://localhost:8000/api/conductor/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Conductor[]> {
    return this.httpClient.get<Conductor[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(conductor): Observable<Conductor> {
    return this.httpClient.post<Conductor>(this.apiURL, JSON.stringify(conductor), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id): Observable<Conductor> {
    return this.httpClient.get<Conductor>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  update(id, conductor): Observable<Conductor> {
    return this.httpClient.put<Conductor>(this.apiURL + id, JSON.stringify(conductor), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  delete(id){
    return this.httpClient.delete<Conductor>(this.apiURL + id, this.httpOptions)
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
