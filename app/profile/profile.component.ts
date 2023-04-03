import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Teleuser } from '../teleuser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  
  teleuser:Teleuser=new Teleuser();
  contactNumber:any;
  
  ngOnInit() {
    this.getUserDetailByPhoneNumber();
  }

  constructor(private userLoginservice:LoginService){}

  getUserDetailByPhoneNumber(){
    this.userLoginservice.getUserById().subscribe(
      (resp:any)=>{
        this.teleuser=resp;
        console.log(resp);
      }
    );
  }
}
