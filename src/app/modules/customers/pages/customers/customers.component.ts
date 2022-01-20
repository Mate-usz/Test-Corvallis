import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  myCustomers: Customer[] = [];

  sub!: Subscription;

  constructor(private router: Router,
              private customersService: CustomersService)
  {
    this.sub = this.customersService.getCustomers().subscribe( data => this.myCustomers = data);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onAddNewCustomerClick(){
    this.customersService.addNewCustomer();
  }

  showCustomerDetails(customer: Customer){
    this.customersService.currentCustomerDetails = customer;
    this.router.navigate(['dashboard/details']);
  }
}
