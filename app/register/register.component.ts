import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Teleuser } from '../teleuser';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  teleuser:Teleuser=new Teleuser();
  loginsuccess: any;

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit():void {
  }

  displayAlert(){
    this.loginsuccess= "Successfully registered";
    jQuery('#myAlert').show;
  }

  userRegister(){
    console.log(this.teleuser);
    this.registerService.registerUser(this.teleuser).subscribe(data=>{
    // alert("Registered Successfully");
    // this.loginsuccess="Login";
    this.goToLogin();
    
    },error=>alert("Error"));
    
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
