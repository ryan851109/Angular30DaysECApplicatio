import { SendType } from './send-type';
import { Component, OnInit } from '@angular/core';
import { appPath } from 'src/app/app-path.const';

@Component({
  selector: 'app-receipt-info',
  templateUrl: './receipt-info.component.html',
  styleUrls: ['./receipt-info.component.css']
})
export class ReceiptInfoComponent implements OnInit {

  constructor() { }

  path = appPath;
  sendType = SendType;
  selectedType = SendType.EMAIL;

  ngOnInit(): void {
  }

  switch(type: number): void {
    this.selectedType = type;
  }

  didSelected(type: number): boolean {
    return this.selectedType === type;
  }

}
