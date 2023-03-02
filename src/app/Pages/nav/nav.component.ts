import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = "Reactive Forms";
  constructor() {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
    name:new FormControl(''),
    password: new FormControl('')
  })

  loginReactive(){
    console.log(this.loginForm.value);
  }
}
