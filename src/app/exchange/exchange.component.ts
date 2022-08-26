import { Component, Input, OnInit } from '@angular/core';
import { Tax } from '../models/Taxes';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  @Input() taxes: Tax[] = [];

  public firstInput = 1;
  public secondInput = 1;
  public multiplier1 = 25.49;
  public multiplier2 = 25.49;
  public showList = false;

  getInputDirect(event: any) {
    this.firstInput = event.target.value;
    this.secondInput = +(event.target.value * this.multiplier1 / this.multiplier2).toFixed(2)
  }

  getInputBack(event: any) {
    this.secondInput = event.target.value;
    this.firstInput = +(event.target.value * this.multiplier2 / this.multiplier1).toFixed(2)
  }

  selectDirectMultiplier(event: any) {
    this.taxes.map(tax=>{
      if (event.target.value === tax.txt) {
        this.multiplier1 = tax.rate;
        this.secondInput = +(this.firstInput * tax.rate / this.multiplier2).toFixed(2)
      }
    })
  }

  selectBackMultiplier(event: any) {
    this.taxes.map(tax=>{
      if (event.target.value === tax.txt) {
        this.multiplier2 = tax.rate;
        this.firstInput = +(this.secondInput * tax.rate / this.multiplier1).toFixed(2)

      }
    })
  }

  ngOnInit(): void {

  }

}
