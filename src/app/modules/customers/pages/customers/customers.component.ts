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

  allCustomers: Customer[] = [];
  displayCustomers: Customer[] = [];

  sub!: Subscription;

  constructor(private router: Router,
              private customersService: CustomersService)
  {
    this.sub = this.customersService.getCustomers()
                  .subscribe( data => {
                    this.allCustomers = data,
                    this.displayCustomers = this.allCustomers
                    });
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

  filterCustomers(target: EventTarget){
    const inputElem = target as HTMLInputElement;
    console.log(inputElem.value);
    this.displayCustomers = this.allCustomers.filter( customer => customer.firstName.toLowerCase().startsWith(inputElem.value.toLowerCase()) )
  }
}
