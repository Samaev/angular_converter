import { Component, OnInit } from '@angular/core';
import { Tax } from './models/Taxes';
import { RatesService } from './services/rates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'angular_converter';
  taxes: Tax[] = [];
  loading = false;


  date = new Date();

  constructor(private ratesService: RatesService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.ratesService.getAll().subscribe(taxes =>{
      this.taxes = taxes
      this.loading = false
    });
    setInterval(()=>{
      this.date = new Date();
    }, 1000)
  }


}
