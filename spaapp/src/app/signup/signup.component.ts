import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import notify from 'devextreme/ui/notify';
import { enableProdMode } from '@angular/core';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: any;
  password = '';
  emailPat: any = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  constructor(public af: AngularFireAuth, private router: Router) { }

  btnSignUp(email, password) {
    this.af.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.router.navigate(['/login']);
      notify({
        message: 'Bạn đã đăng ký thành công',
        position: {
          my: 'center top',
          at: 'center top'
        }
      }, 'success', 3000);
    }).catch((err) => {
      this.error = err;
    });
  }
  passwordComparison = () => {
    return this.password;
  }

  ngOnInit() {
  }
}
