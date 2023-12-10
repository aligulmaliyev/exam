import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})

export  class GenericService {
  constructor(public httpClient: HttpClient) {}

  getAll(url: string) {
    return this.httpClient.get(`${environment.baseUrl}/${url}`);
  }

  post(url: string, data: any) {
    return this.httpClient.post(`${environment.baseUrl}/${url}`, data);
  }
}
