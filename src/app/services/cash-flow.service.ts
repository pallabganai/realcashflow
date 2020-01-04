import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {
  private propertyMarketValue: Subject<number> = new Subject<number>();
  private propertyPriceValue: Subject<number> = new Subject<number>();


  constructor() {}

  calculateSMarketValueAA(marketValue: number, propertyPrice: number) {
    console.log('calculateMarketValue in service marketValue - ' +marketValue);
    this.propertyMarketValue.next(marketValue);
    console.log('calculateMarketValue in service propertyPrice - ' +propertyPrice);
    this.propertyPriceValue.next(propertyPrice);
  }

  marketValueChanged(): Observable<number> {
    console.log('marketValueChanged in service called');
    return this.propertyMarketValue.asObservable();
  }

  propertyPriceChanged(): Observable<number> {
    console.log('propertyPriceChanged in service called');
    return this.propertyPriceValue.asObservable();
  }
}
