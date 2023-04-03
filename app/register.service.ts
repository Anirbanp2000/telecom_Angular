import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from './plan';
import { Teleuser } from './teleuser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 baseUrl="http://localhost:9800/user/register";

  constructor(private httpClient: HttpClient) { }

  registerUser(teleuser: Teleuser):Observable<Object>{
     console.log(teleuser);
     return this.httpClient.post(`${this.baseUrl}`,teleuser,{responseType:'text'});
  }

  baseUrl1="http://localhost:9803/user/add";

  registerPlan(plan:Plan):Observable<Object>{
    console.log(plan);
     return this.httpClient.post(`${this.baseUrl1}`,plan,{responseType:'text'});
  }
  }
  

