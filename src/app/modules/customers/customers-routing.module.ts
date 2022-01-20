import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent},
  { path: 'details', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
