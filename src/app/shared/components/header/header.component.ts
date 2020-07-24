import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    {url: '/home', title: 'Home'},
    {url: '/products', title: 'Products'},
    {url: '/contact', title: 'Contact'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
