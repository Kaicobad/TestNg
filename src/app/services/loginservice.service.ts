import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Loginmodel } from '../model/loginmodel';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService implements OnInit
{
  isLoggedin = new BehaviorSubject<boolean>(false);
  constructor(private _HttpClient: HttpClient, private route : Router) 
  {}
  ngOnInit(): void {
    
  }
  getTokenUrl = environment.apiUrl + "Login/login";


  // getToken()
  //  {
  //   return this._HttpClient.get<any>(this.getTokenUrl);
  //  }

   getLoginData(msisdn:string)
    {
      const _LoginModel : Loginmodel=
      {
        msisdn : msisdn,
      };

      this._HttpClient.post(this.getTokenUrl, _LoginModel,{observe:'response'})
      .subscribe((res:any)=>
      {
        this.isLoggedin.next(true);
        localStorage.setItem("token",res.body.Data);
        this.route.navigate(["landing/home"]);
      });

      return false

    }

}
