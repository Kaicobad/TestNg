import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-container',
    templateUrl: './Container.component.html',
    styleUrls: ['./Container.component.css']
})

export class ContainerComponent implements OnInit 
{
    constructor() {

    }
    ngOnInit(): void {

    }
    @Input() count : string ="";
}