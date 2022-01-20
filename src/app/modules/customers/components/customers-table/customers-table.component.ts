import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})
export class CustomersTableComponent implements OnInit {
  @Output() customerClicked = new EventEmitter<Customer>();
  @Input() customers!: Customer[];

  constructor() { }

  ngOnInit(): void {
  }

  // Show customer details when table row is clicked
  onCustomerClick(customer: Customer){
    this.customerClicked.emit(customer);
  }
}
