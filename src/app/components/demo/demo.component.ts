import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  valuePow = 0;
  title = 'store';
  count = 1;
  names = ['Rafael', 'Maria', 'Elorent', 'Carlos'];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.names.push(`item ${this.count}`);
    this.count++;
  }

  deleteItem(index: number): void {
    this.names.splice(index, 1);
  }

}
