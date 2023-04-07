import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:8080/getsolr/';

  constructor(private http: HttpClient) { }

  getById(id: string) {
    return this.http.get(`${this.baseUrl}${id}`);
  }
}