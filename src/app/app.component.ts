import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Aqui en vez de llamar un achivo le pasamos el html directamente porque es muy corto.
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Store';

}
