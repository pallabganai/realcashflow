import { Component, OnInit } from '@angular/core';
import { CashFlowService } from '../services/cash-flow.service';
import { PropertyValue } from '../model/property-value.model';

@Component({
  selector: 'app-property-value',
  templateUrl: './property-value.component.html',
  styleUrls: ['./property-value.component.css']
})
export class PropertyValueComponent implements OnInit {
  public propertyPrice = 0;
  public renovationCosts = 0;
  public propertyValue: PropertyValue;
  
  constructor(private  _cashFlowService: CashFlowService) {
    this.propertyValue = new PropertyValue(_cashFlowService);
    //this.propertyValue.cashFlowService = _cashFlowService;
  }

  ngOnInit() {
    //this.propertyValue = new PropertyValue(_cashFlowService);
    this.propertyValue.propertyPrice = 0;
    this.propertyValue.renovationCosts = 0;
    this.propertyValue.marketValue = 0;
    //this.calculateMarketValue();

    this.propertyValue.calculateSMarketValue();
  }

  calculateMarketValue() {
    this.propertyValue.marketValue = this.propertyValue.propertyPrice + this.propertyValue.renovationCosts;
    console.log('calculateMarketValue called');
    //this.propertyValue.cashFlowService.calculateSMarketValueAA(10);
    this.propertyValue.calculateSMarketValue();
    //this.propertyValue.calculateSMarketValue();
  }

}
