import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import notify from 'devextreme/ui/notify';
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
  email = '';
  password = '';
  showLoginEmail = false;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.showLoginEmail = false;
  }
  loginFb() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()
    ).then((res) => {
      this.router.navigate(['/home']);
      location.reload();
    }).catch((err) => {
      console.log(err);
    });
  }
    loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()
    ).then((res) => {
      this.router.navigate(['/home']);
      location.reload();
    }).catch((err) => {
      console.log(err);
    });
  }
  loginEmail(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((res) => {
      this.router.navigate(['/home']);
    }).catch((err) => {
      notify({
        message: err,
        position: {
          my: 'center top',
          at: 'center top'
        }
      }, 'error', 3000);
    });
  }
  btnLogin() {
    this.showLoginEmail = true;
  }
  ngOnInit() {
  }

}
