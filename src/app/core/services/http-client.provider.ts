import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientProvider {
  constructor(private httpClient: HttpClient) {}

  public getRequest<T>(
    url: string,
    params?: {},
  ): Observable<T> {
    return this.httpClient.get<T>(url, {responseType: 'json', params});
  }

  public putRequest<T>(
    url: string,
    body: any,
    params?: {},
  ): Observable<T> {
    return this.httpClient.put<T>(url, body, {responseType: 'json', params});
  }

  public postRequest<T>(
    url: string,
    body: any,
    params?: {},
  ): Observable<T> {
    return this.httpClient.post<T>(url, body, {responseType: 'json', params});
  }
  
  public deleteRequest<T>(
    url: string,
    params?: {},
  ): Observable<T> {
    return this.httpClient.delete<T>(url, {responseType: 'json', params});
  }
}
