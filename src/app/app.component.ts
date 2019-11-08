import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  chk:boolean=true; //make it false and check to see the diff. b/w interpolation and property binding
  name:string="hii";
  num:number=10;
  emp:any[]=[
    {
      name:"we",
      num:20
    },
    {
      name:"well",
      num:30
    }
  ]
}
