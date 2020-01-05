import { Component, OnInit } from '@angular/core';
import { CashFlowService } from '../services/cash-flow.service';
import { Subscription } from 'rxjs';
import { PropertyValue } from '../model/property-value.model';
import { PurchaseExpenses } from '../model/purchase-expenses.model';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-purchase-expenses',
  templateUrl: './purchase-expenses.component.html',
  styleUrls: ['./purchase-expenses.component.css']
})
export class PurchaseExpensesComponent implements OnInit {
  marketValueSubscription: Subscription;
  propertyPriceSubscription: Subscription;
  public propertyValue: PropertyValue;
  public purchaseExpenses: PurchaseExpenses;

  constructor(private  _cashFlowService: CashFlowService) {
    this.purchaseExpenses = new PurchaseExpenses();
  }

  ngOnInit() {
    this.purchaseExpenses.transferRegistrationFee = 0;
    this.marketValueSubscription = this._cashFlowService.marketValueChanged().subscribe(value => {
      this.purchaseExpenses.transferRegistrationFee = value;
      console.log('New stampDuty=marketValueChanged Value - ' +value);
    });

    this.purchaseExpenses.stampDuty = 0;
    this.propertyPriceSubscription = this._cashFlowService.propertyPriceChanged().subscribe(propertyPrice => {
      if(propertyPrice > 1000000) {
        this.purchaseExpenses.stampDuty = (75000-5000)*0.015+(540000-75000)*0.035+(1000000-540000)*0.045+0.0575*(propertyPrice-1000000);
      } else if(propertyPrice>540000) {
        this.purchaseExpenses.stampDuty = (75000-5000)*0.015+(540000-75000)*0.035+0.045*(propertyPrice-540000);
      } else if(propertyPrice>75000) {
        this.purchaseExpenses.stampDuty = (75000-5000)*0.015+0.035*(propertyPrice-75000);
      } else if(propertyPrice>5000) {
        this.purchaseExpenses.stampDuty = 0.015*(propertyPrice-5000);
      }

      formatNumber(this.purchaseExpenses.stampDuty, 'en-US', '1.0-0');

      console.log('New transferRegistrationFee=propertyPriceChanged Value - ' +propertyPrice);
    });

    console.log('ngOnInit of PurchaseExpensesComponent');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.marketValueSubscription.unsubscribe();
    this.propertyPriceSubscription.unsubscribe();
  }
}
