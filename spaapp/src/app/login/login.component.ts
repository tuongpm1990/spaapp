import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

// //
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
//
@Injectable()
export class LoginComponent implements OnInit {
  error: any;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }
  // loginGoogle() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   return this.oAuthLogin(provider);
  // }
  //
  // private oAuthLogin(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //     .then((credential) => {
  //       this.router.navigate(['/members']);
  //     });
  // }
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
  screen(width) {
    return ( width < 700 ) ? 'sm' : 'lg';
  }
  ngOnInit() {
  }

}
