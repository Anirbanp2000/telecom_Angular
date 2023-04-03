import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../plan';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-broadband',
  templateUrl: './broadband.component.html',
  styleUrls: ['./broadband.component.css']
})
export class BroadbandComponent implements OnInit{

  plan:Plan=new Plan();

  loginsuccess: string='';

  constructor(private registerService: RegisterService, private router: Router) {}

  selectedOption: string='';
  
//   plans = [
//     { value:'SilverRs399', label: 'Silver Rs399'},
//     { value:'GoldRs699', label: 'Gold Rs699'},
//     { value:'PlatinumRs999' ,label: 'Platinum Rs999'}
//  ];

 ngOnInit():void{
 
}
 
successAlert(){
  this.loginsuccess= "Applied Successful";
  jQuery('#myAlert').show;
}

  planRegister(){
    console.log(this.plan);
    this.registerService.registerPlan(this.plan).subscribe(data=>{
    // alert("Applied Successfully");
    this.successAlert();
    this.goToHome();
    
    },error=>alert("error"));
    
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
