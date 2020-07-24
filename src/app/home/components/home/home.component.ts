import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  imageUrls = [
    'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3830781/pexels-photo-3830781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Inicializamos el Swiper segun la documentacion de la libreria.
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      init: true,
      speed: 400,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  nextSlide(): void {
    this.mySwiper.slideNext();
  }

  prevSlide(): void {
    this.mySwiper.slidePrev();
  }
}
