import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiURL = "http://localhost:8000/api/vehiculo/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
 constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Vehiculo[]> {
   return this.httpClient.get<Vehiculo[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(vehiculo): Observable<Vehiculo> {
  return this.httpClient.post<Vehiculo>(this.apiURL, JSON.stringify(vehiculo), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

find(id): Observable<Vehiculo> {
  return this.httpClient.get<Vehiculo>(this.apiURL + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

update(id, vehiculo): Observable<Vehiculo> {
  return this.httpClient.put<Vehiculo>(this.apiURL + id, JSON.stringify(vehiculo), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

delete(id){
  return this.httpClient.delete<Vehiculo>(this.apiURL + id, this.httpOptions)
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