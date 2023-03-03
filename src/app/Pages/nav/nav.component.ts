import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";
import { Response } from "../../model/response";
import { LoginserviceService } from "../../services/loginservice.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  rsponseresult: any;

  msisdn : any;
  token : any;

  title = "Reactive Forms";
  constructor
    (
      private loginService: LoginserviceService
    ) { }
  ngOnInit(): void {
    // this.getTokeString();
  }
  searchValue: string = 'ipun';
  getText(eventdata: Event) {
    this.searchValue = (<HTMLInputElement>eventdata.target).value;
  }

  informations = [{ company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
  { company: "Ernst Handel", contact: "Roland Mendel	", country: "Austria" },
  { company: "Island Trading", contact: "Helen Bennett	", country: "UK" }];
  getCount(): any {
    return this.informations.length;
  }

  login(value: any) {
    console.log(value);
  }

  loginForm = new FormGroup({
    name:new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  loginReactive(){
    console.log(this.loginForm.value);

    this.getTokeString();
  }

  get namevalidation(){
    return this.loginForm.get('name');
  }

  getTokeString()
  {
    this.msisdn = this.loginForm.value.name;

    // this.loginService
    //     .getLoginData(this.msisdn)
    //     .subscribe((response) =>
    //     {
    //       this.rsponseresult = response;
    //       Response = this.rsponseresult;
    //       this.token = this.rsponseresult.Data;
    //       console.log(this.rsponseresult);
    //     });

    return this.loginService.getLoginData(this.msisdn);
   

  }
}
