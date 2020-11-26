import { Component, OnInit} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Aqui en vez de llamar un achivo le pasamos el html directamente porque es muy corto.
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Store';
  constructor(
    private swUpdate: SwUpdate
  ){}
  
  ngOnInit(){
    this.updatePWA();
  }

  updatePWA(): void {
    this.swUpdate.available
    .subscribe( value => {
      console.log('update:', value);
      window.location.reload();
    })
  }
}
