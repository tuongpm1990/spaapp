import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) { }
  signOut() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
