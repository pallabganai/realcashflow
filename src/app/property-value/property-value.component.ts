import { Component, OnInit } from '@angular/core';
import { CashFlowService } from '../services/cash-flow.service';

@Component({
  selector: 'app-property-value',
  templateUrl: './property-value.component.html',
  styleUrls: ['./property-value.component.css'],
  providers: [CashFlowService]
})
export class PropertyValueComponent implements OnInit {
  public propertyPrice = 0;
  public renovationCosts = 0;
  
  constructor(private  _cashFlowService: CashFlowService) { }

  ngOnInit() {
  }

  calculateMarketValue() {
    console.log('calculateMarketValue called');
    this._cashFlowService.calculateSMarketValue();
  }

}
