import { Component, OnInit } from '@angular/core';
import { CashFlowService } from '../services/cash-flow.service';
import { Subscription } from 'rxjs';
import { PropertyValue } from '../model/property-value.model';
import { PurchaseExpenses } from '../model/purchase-expenses.model';

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
    this.purchaseExpenses.stampDuty = 0;
    this.marketValueSubscription = this._cashFlowService.marketValueChanged().subscribe(value => {
      this.purchaseExpenses.stampDuty = value;
      console.log('New stampDuty=marketValueChanged Value - ' +value);
    });

    this.purchaseExpenses.transferRegistrationFee = 0;
    this.propertyPriceSubscription = this._cashFlowService.propertyPriceChanged().subscribe(value => {
      this.purchaseExpenses.transferRegistrationFee = value;
      console.log('New transferRegistrationFee=propertyPriceChanged Value - ' +value);
    });

    console.log('ngOnInit of PurchaseExpensesComponent');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.marketValueSubscription.unsubscribe();
    this.propertyPriceSubscription.unsubscribe();
  }
}
