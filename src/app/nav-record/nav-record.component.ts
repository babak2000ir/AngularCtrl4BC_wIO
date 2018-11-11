import { Component, OnInit } from '@angular/core';

import { BCCommServiceService } from '../bccomm-service.service';
import { NavRecord } from '../NavRecord';

@Component({
  selector: 'app-nav-record',
  templateUrl: './nav-record.component.html',
  styleUrls: ['./nav-record.component.css']
})
export class NavRecordComponent implements OnInit {
  constructor(private bcCommServ: BCCommServiceService) {}

  static customer: NavRecord;

  customer: NavRecord[];
  ngOnInit() {
  }

  static GetCustomer(customer_from_outside: string): void
  {
    NavRecordComponent.customer = JSON.parse(customer_from_outside);
  }

  get CustomerVar() {
    return NavRecordComponent.customer;
  }



}
