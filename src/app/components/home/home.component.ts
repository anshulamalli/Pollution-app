import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PollutionData:any;
   cval='';
   sval='';
   ctval='';
   constructor() { }
 
   ngOnInit() {
     this.PollutionData = {
       main : {},
       isDay: true
     };
     this.getPollutionData();
     console.log(this.PollutionData);
   }
   getcountry(val:string){
     this.cval=val;
     console.log(this.cval);
   }
   getstate(val:string){
     this.sval=val;
     console.log(this.sval);
   }
   getcity(val:string){
     this.ctval=val;
     console.log(this.ctval);
   }
   getPollutionData(){
     fetch('http://api.airvisual.com/v2/city?city=${this.ctval}&state=${this.sval}&country=${this.cval}&key=354930db-4a6d-49b0-b71e-bb20df7e5b60')
     .then(response=>response.json())
     .then(data=>{this.setPollutionData(data);})
   }
 
   setPollutionData(data: any){
     this.PollutionData = data;
     console.log(data)
     console.log(this.cval);
   }
 
 }
 
