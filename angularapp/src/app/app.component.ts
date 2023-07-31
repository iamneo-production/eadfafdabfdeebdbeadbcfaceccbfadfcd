import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  constructor(
    private formBuilder: FormBuilder,
  ) {}


  changeFc(event,option) {
    console.log(event.target.value);
    if(option == "f")
      document.getElementById("fc").setAttribute("value",event.target.value);
    else if(option == "t")
      document.getElementById("tc").setAttribute("value",event.target.value);
    else
      document.getElementById("amount").setAttribute("value",event.target.value);
  }
  submit() {
    const fC = document.getElementById("fc");
    const tC = document.getElementById("tc");
    const amount = document.getElementById("amount");
    const answer = Math.round((parseFloat(amount.getAttribute("value"))/parseFloat(fC.getAttribute("value"))) * parseFloat(tC.getAttribute("value"))).toFixed(2);
    console.log(answer);
    document.getElementById("result").setAttribute("value",answer.toString());
    document.getElementById("resValue").innerHTML = answer.toString();
  }

  reset() {
    console.log("done");
  }
  

}
