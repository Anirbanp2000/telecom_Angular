import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../service/check.service';
import { Checkout } from '../checkout';


@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit{

  checkout:Checkout=new Checkout();


  constructor(private checkservice: CheckService, private router: Router) {}

  ngOnInit():void {
  }

  // displayAlert(){
  //   this.loginsuccess= "Successfully registered";
  //   jQuery('#myAlert').show;
  // }

  userPay(){
    console.log(this.checkout);
    this.checkservice.pay(this.checkout).subscribe(data=>{
    // alert("Registered Successfully");
    // this.loginsuccess="Login";
    // this.goToLogin();
    console.log("Anirban");
    
    },error=>alert("Error"));
    
  }

  // goToLogin(){
  //   this.router.navigate(['/home']);
  // }

}
