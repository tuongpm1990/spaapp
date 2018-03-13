import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import {AngularFireAuth} from 'angularfire2/auth';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  error: any;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }
  loginFb() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()
    ).then((res) => {
      this.router.navigate(['/members']);
    }).catch((err) => {
      console.log(err);
    });
  }
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()
    ).then((res) => {
      this.router.navigate(['/members']);
    }).catch((err) => {
      console.log(err);
    });
  }
  // signInWithFacebook() {
  //   return this.afAuth.auth.signInWithPopup(
  //     new firebase.auth.FacebookAuthProvider()
  //   );
  // }
  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
