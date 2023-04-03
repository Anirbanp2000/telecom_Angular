import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teleuser } from './teleuser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:9800"
  
  constructor(private httpClient:HttpClient) { }

  login(teleuser:Teleuser){
    return this.httpClient.post(`${this.baseUrl}/user/login`,teleuser,{responseType:"text"});
  }

  loginuser(data:any){
    return this.httpClient.post(`${this.baseUrl}`,data);
  }

  getUserById(){
    const token=localStorage.getItem("token");
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    return this.httpClient.get(`${this.baseUrl}/user/${token}`,{headers:header,responseType:'json'})
  }



}
