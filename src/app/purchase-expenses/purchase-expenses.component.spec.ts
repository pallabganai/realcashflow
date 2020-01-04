import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseExpensesComponent } from './purchase-expenses.component';

describe('PurchaseExpensesComponent', () => {
  let component: PurchaseExpensesComponent;
  let fixture: ComponentFixture<PurchaseExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
