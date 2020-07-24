import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() previous: EventEmitter<any> = new EventEmitter();
  @Input() imageUrls: string[];
  constructor() {}

  ngOnInit(): void {
  }
  // Hacemos uso de los metodos para manipular el banner de la libreria.
  nextSlide(): void {
    this.next.emit();
  }
  prevSlide(): void {
    this.previous.emit();
  }
}
