import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  get(endpoint: string) {

    return this.http.get(
      `${this.baseUrl}/${endpoint}`
    );

  }

  post(endpoint: string, payload: any) {

    return this.http.post(
      `${this.baseUrl}/${endpoint}`,
      payload
    );

  }

  put(endpoint: string, payload: any) {

    return this.http.put(
      `${this.baseUrl}/${endpoint}`,
      payload
    );

  }

  delete(endpoint: string) {

    return this.http.delete(
      `${this.baseUrl}/${endpoint}`
    );

  }

}