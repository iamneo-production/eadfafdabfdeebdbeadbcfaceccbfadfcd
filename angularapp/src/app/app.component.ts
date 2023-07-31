import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-currency-converter';
 fromCurrency=0;
 toCurrency=0;
  amount=0;
  num=0;
  setSource(s:any){
    this.fromCurrency=s;
  } 

  setTarget(t:any){
    this.toCurrency=t;

  }

  convert(){
   this.num=(this.toCurrency/this.fromCurrency)*this.amount;
   this.num=Math.round(this.num);
  }
  reset(){
    this.amount=0;
    this.num=0;2
    this.toCurrency=0;
    this.fromCurrency=0;

  }
}
