// import { CanActivate, Router } from '@angular/router';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
// import { fromPromise } from 'rxjs/observable/fromPromise';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
// @Injectable()
// export class AuthGuard implements CanActivate {
//
//   constructor(private auth: AngularFireAuth, private router: Router) {}
//
//   canActivate(): Observable<boolean> {
//     return Observable.from(this.auth)
//       .take(1)
//       .map(state => !
//         state)
//       .do(authenticated => {
//         if (!authenticated) {
//           this.router.navigate([ '/login' ]);
//         }
//       });
//   }
//
// }
