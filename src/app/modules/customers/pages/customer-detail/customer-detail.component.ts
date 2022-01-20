import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customer!: Customer;

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customer = this.customersService.currentCustomerDetails;
  }

}
