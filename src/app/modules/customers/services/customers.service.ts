import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private newCustomer: Customer =
  {
    id: 0,
    image: '../../../assets/images/User.svg',
    firstName: 'Lorem',
    lastName: 'Ipsum',
    address: {
      street: '123 Street',
      city: 'Rome',
      state: 'Italy'
    },
    orderTotal: 12345.67
  }

  private customers: Customer[] = [
    {
      id: 0,
      image: '../../../assets/images/User.svg',
      firstName: 'Michelle',
      lastName: 'Avery',
      address: {
        street: '346 Cedar Ave.',
        city: 'Dallas',
        state: 'Texas'
      },
      orderTotal: 1699.89
    },
    {
      id: 1,
      image: '../../../assets/images/User.svg',
      firstName: 'Ward',
      lastName: 'Bell',
      address: {
        street: '12 Ocean View St.',
        city: 'Dallas',
        state: 'Texas'
      },
      orderTotal: 1235.96
    },
    {
      id: 2,
      image: '../../../assets/images/User.svg',
      firstName: 'Robin',
      lastName: 'Cleark',
      address: {
        street: '35632 Richmond Circle Apt B',
        city: 'Los Angeles',
        state: 'California'
      },
      orderTotal: 1249.94
    },
  ];

  private currentID = 2;

  currentCustomerDetails!: Customer;

  private customersSubject = new BehaviorSubject(this.customers);

  constructor() { }

  getCustomers(){
    return this.customersSubject;
  }

  addNewCustomer(){
    this.customers.push({ ...this.newCustomer, id: this.currentID });
    this.customersSubject.next(this.customers);
  }
}
