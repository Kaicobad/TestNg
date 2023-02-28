import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit
{

  constructor(){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  searchValue : string ='ipun';
  getText(eventdata: Event){

    console.log((<HTMLInputElement>eventdata.target).value);
    this.searchValue = (<HTMLInputElement>eventdata.target).value;
  }

  informations = [{company:"Centro comercial Moctezuma",contact:"Francisco Chang", country:"Mexico"},
                {company:"Ernst Handel",contact:"Roland Mendel	", country:"Austria"},
                {company:"Island Trading",contact:"Helen Bennett	", country:"UK"}];
}
