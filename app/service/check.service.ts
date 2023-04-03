import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkout } from '../checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private baseUrl="http://localhost:9804";

  constructor(private httpClient: HttpClient) { }

 pay(checkout: Checkout):Observable<Object>{
     console.log(checkout);
     return this.httpClient.post(`${this.baseUrl}/pay`,checkout,{responseType:'text'});
  }
}
