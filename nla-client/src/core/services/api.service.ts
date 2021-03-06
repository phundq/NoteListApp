import { Note } from './../model/note';
import { Observable } from 'rxjs';
import { BASE_URL } from './../configs/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient
  ) { 
  }

  get(url : string): Observable<any>{
    return this.http.get<any>(BASE_URL + url);
  }

  post(url : string, data: any): Observable<any>{
    return this.http.post<any>(BASE_URL + url, data);
  }

  delete(url : string, data: any): Observable<any>{
    let option = {
      headers :{},
      body : data
    };
    return this.http.delete<any>(BASE_URL + url, option );
  }
}
