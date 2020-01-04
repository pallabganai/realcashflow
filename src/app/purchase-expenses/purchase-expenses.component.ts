import { Component, OnInit } from '@angular/core';
import { CashFlowService } from '../services/cash-flow.service';
import { Subscription } from 'rxjs';

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
  subscription: Subscription;

  constructor(private  _cashFlowService: CashFlowService) { }

  ngOnInit() {
    this.stampDuty = this._cashFlowService.propertyMarketValueDum;
    this.subscription = this._cashFlowService.reflectChange().subscribe(value => {
      this.stampDuty = value
      console.log('New Value - ' +value);
    });
    console.log('ngOnInit of PurchaseExpensesComponent');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
