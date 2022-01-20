import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomersComponent } from './pages/customers/customers.component';

@NgModule({
  declarations: [
    CustomersTableComponent,
    CustomersComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
