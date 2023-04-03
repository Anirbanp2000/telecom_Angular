import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { RechargePlans } from '../recharge-plans';
import { RechargeService } from '../recharge.service';


@Component({
  selector: 'app-viewplans',
  templateUrl: './viewplans.component.html',
  styleUrls: ['./viewplans.component.css']
})
export class ViewplansComponent implements OnInit{

  rechargePlans:RechargePlans=new RechargePlans();

  plans:any= [];

// plans:any='';
  constructor(private rechargeService:RechargeService){}

  data:any;

  ngOnInit():void{
    this.rechargeService.getAllRechargePlans().subscribe((plans:any)=>{
      this.plans=plans;
      // console.log(plans);
  });
  }
 
  submit1(){
    const id="1";
    this.rechargeService.getRechargePlanById(id).subscribe((data:any)=>{
      this.data=data;
      console.log(data);
    });
  }

  submit2(){
    const id="2";
    this.rechargeService.getRechargePlanById(id).subscribe((data:any)=>{
      this.data=data;
      console.log(data);
    });
  }

  submit3(){
    const id="3";
    this.rechargeService.getRechargePlanById(id).subscribe((data:any)=>{
      this.data=data;
      console.log(data);
    });
  }
}
