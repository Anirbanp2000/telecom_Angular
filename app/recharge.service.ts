import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RechargePlans } from './recharge-plans';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

   private baseUrl="http://localhost:9801"
  
  constructor(private httpClient:HttpClient) { }
  
  getAllRechargePlans(){
    return this.httpClient.get(`${this.baseUrl}/allPlans`);
  }

  getRechargePlanById(id:string){
     return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
