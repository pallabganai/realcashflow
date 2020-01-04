import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyValueComponent } from './property-value/property-value.component';
import { PurchaseExpensesComponent } from './purchase-expenses/purchase-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyValueComponent,
    PurchaseExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
