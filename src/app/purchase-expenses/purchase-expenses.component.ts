import { Component, OnInit } from '@angular/core';
import { CashFlowService } from '../services/cash-flow.service';
import { Subscription } from 'rxjs';
import { PropertyValue } from '../model/property-value.model';

@Component({
  selector: 'app-purchase-expenses',
  templateUrl: './purchase-expenses.component.html',
  styleUrls: ['./purchase-expenses.component.css']
})
export class PurchaseExpensesComponent implements OnInit {
  public stampDuty;
  public transferRegistrationFee;
  public buyersAgentFee;
  public conveyance;
  public buildingInspection;
  marketValueSubscription: Subscription;
  propertyPriceSubscription: Subscription;
  public propertyValue: PropertyValue;

  constructor(private  _cashFlowService: CashFlowService) { }

  ngOnInit() {
    this.stampDuty = 0;
    this.marketValueSubscription = this._cashFlowService.marketValueChanged().subscribe(value => {
      this.stampDuty = value;
      console.log('New stampDuty=marketValueChanged Value - ' +value);
    });

    this.transferRegistrationFee = 0;
    this.propertyPriceSubscription = this._cashFlowService.propertyPriceChanged().subscribe(value => {
      this.transferRegistrationFee = value;
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
