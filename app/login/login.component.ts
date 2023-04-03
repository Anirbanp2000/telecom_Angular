import { Component, OnInit} from '@angular/core';
import { Teleuser } from '../teleuser';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginsuccess:string='';
  loginerror: string='';


  ngOnInit(): void {
   
  }

  constructor(private userloginservice:LoginService,private router:Router, private route:ActivatedRoute){}
  teleuser:Teleuser=new Teleuser();

  successAlert(){
    this.loginsuccess= "Login Successful";
    jQuery('#myAlert1').show;
  }

  wrongPasswordAlert(){
    this.loginerror = "Login failed. Please check your phone number and password and try again.";
    jQuery('#myAlert').show;
  }
  
  doLogin(teleuser:Teleuser){
    let resp=this.userloginservice.login(teleuser);
    resp.subscribe(data=>{
    if(data=="User not authenticated"){
     alert(data);

    }
    else if(data=="phone no or password does not match."){
      this.wrongPasswordAlert();
    }
    else if(data=="there is an error"){
      // alert(data);
      this.wrongPasswordAlert();
    }
    else{
      localStorage.setItem("token",data);
      localStorage.setItem("contactNumber",teleuser.contactNumber);
      console.log(data);
      this.successAlert();
      this.router.navigateByUrl("/login");
      location.reload();
    }
  });
 }
}
