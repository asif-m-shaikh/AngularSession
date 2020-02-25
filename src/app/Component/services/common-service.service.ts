import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private httpClient: HttpClient) { }
data:any;
  getSecure(a, b) {
    return a + b;
  }

  postSecure(url): Observable<any> {
    return this.httpClient.get(url)
  }
}
