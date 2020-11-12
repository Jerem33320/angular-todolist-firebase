import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todolist-firebase';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyBTYsB7qHeC4TSltcBko-zv3NH9HioDsh4",
      authDomain: "angular-todolist-f7f73.firebaseapp.com",
      databaseURL: "https://angular-todolist-f7f73.firebaseio.com",
      projectId: "angular-todolist-f7f73",
      storageBucket: "angular-todolist-f7f73.appspot.com",
      messagingSenderId: "560580291196",
      appId: "1:560580291196:web:4a2b82016d213bd8c577f9"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
