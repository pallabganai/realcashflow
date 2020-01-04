import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyValueComponent } from './property-value/property-value.component';
import { PurchaseExpensesComponent } from './purchase-expenses/purchase-expenses.component';


const routes: Routes = [
  {path: 'propertyvalue', component: PropertyValueComponent},
  {path: 'purchaseexpenses', component: PurchaseExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PropertyValueComponent, PurchaseExpensesComponent]