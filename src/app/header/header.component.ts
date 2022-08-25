import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { Tax } from '../models/Taxes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  @Input()
  taxes: Tax[] = [];
}
