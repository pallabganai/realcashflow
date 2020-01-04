import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {
  public propertyMarketValueDum = 100;
  private propertyMarketValue: Subject<number> = new Subject<number>();


  constructor() { 
    this.propertyMarketValue.next(this.propertyMarketValueDum);
  }

  calculateSMarketValue() {
    console.log('calculateMarketValue in service called b4 - ' +this.propertyMarketValueDum);
    //this.propertyMarketValue = 200;
    this.propertyMarketValue.next(this.propertyMarketValueDum++);
    console.log('calculateMarketValue in service called ar - ' +this.propertyMarketValueDum);
  }

  reflectChange(): Observable<number> {
    console.log('reflectChange in service called');
    return this.propertyMarketValue.asObservable();
  }
}
