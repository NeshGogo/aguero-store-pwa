import { Component, OnInit} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface Token {
  token: string;
}

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Aqui en vez de llamar un achivo le pasamos el html directamente porque es muy corto.
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Store';
  tokenCollection: AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private fireMessaging: AngularFireMessaging,
    private firestore: AngularFirestore,
  ){
    this.tokenCollection = this.firestore.collection<Token>('tokens');
  }
  
  ngOnInit(){
    this.updatePWA();
    this.requestPermission();
    this.listenPermission();
  }

  updatePWA(): void {
    this.swUpdate.available
    .subscribe( value => {
      console.log('update:', value);
      window.location.reload();
    })
  }

  requestPermission(): void {
    this.fireMessaging.requestToken
    .subscribe(token => this.tokenCollection.add({token}));
  }
  
  listenPermission(): void {
    this.fireMessaging.messages
    .subscribe(value =>  console.log(value));
  }
}
