import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-calculator',
  templateUrl: './main-calculator.component.html',
  styleUrls: ['./main-calculator.component.css']
})
export class MainCalculatorComponent implements OnInit {

  public numberText: string = "";
  public result: string = "";
  public history: string[] = [];
  public color: string = "accent";

  constructor() { }

  ngOnInit(): void {
  }

  Add(op: string){
    this.numberText += op;
    console.log("Number entered: " + this.numberText);
    }

  Result(){
    this.result = this.numberText + "=";
    this.numberText = eval(this.numberText);
    console.log("Result: " + this.result);
    this.history.push(this.result);

  }

  Clear(){
    this.numberText = "";
  }

}
