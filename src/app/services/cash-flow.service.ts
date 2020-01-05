import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PropertyValue } from '../model/property-value.model';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {
  private propertyMarketValue: Subject<number> = new Subject<number>();
  private propertyPriceValue: Subject<number> = new Subject<number>();

  marketValueChanged(): Observable<number> {
    return this.propertyMarketValue.asObservable();
  }

  propertyPriceChanged(): Observable<number> {
    return this.propertyPriceValue.asObservable();
  }

  notifyPropertyValueChanged(propertyValue: PropertyValue) {
    this.propertyMarketValue.next(propertyValue.marketValue);
    this.propertyPriceValue.next(propertyValue.propertyPrice);
  }
}