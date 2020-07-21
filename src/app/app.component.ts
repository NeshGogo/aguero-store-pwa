import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  count = 1;
  names = ['Rafael', 'Maria', 'Elorent', 'Carlos'];

  addItem(): void{
    this.names.push(`item ${this.count}`);
    this.count++;
  }

  deleteItem(index: number): void{
    this.names.splice(index, 1);
  }
}
