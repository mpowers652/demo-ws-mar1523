import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  num1:number = 0;
  num2:number = 0;
  res:number = 0;

  add() {
    this.res =  Number(this.num1) + Number(this.num2.valueOf())
  }
  prod() {
    this.res =  this.num1 * this.num2
  }
  sub() {
    this.res =  this.num1 - this.num2
  }
  div() {
    this.res = this.num1 / this.num2
  }
}
