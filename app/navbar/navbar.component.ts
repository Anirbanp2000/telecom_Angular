import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Teleuser } from '../teleuser';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  teleuser:Teleuser=new Teleuser();

  isLoggedIn:boolean=false;
  // loginService: any;
constructor(private router:Router, private userLoginservice:LoginService){}

ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.isLoggedIn=true;
    }this.getUserDetailByPhoneNumber();

}

// onChange()
// {
  
// }

  onLogout(){
    localStorage.removeItem("Token");
    localStorage.removeItem("Teleuser");
    this.router.navigateByUrl("/login");
    this.isLoggedIn=false;
    localStorage.clear();
    // location.reload();
  }

  
//  public onLogout(){
//     this.loginService.clear();
//     this.router.navigate(['/login']);
//   }

  contactNumber:any;

  getUserDetailByPhoneNumber(){
    this.userLoginservice.getUserById().subscribe(
      (resp:any)=>{
        this.teleuser=resp;
        console.log(resp);
      }
    );
  }
}


