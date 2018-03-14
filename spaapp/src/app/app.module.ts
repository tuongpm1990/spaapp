import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { routers } from './app.routers';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyBpj0-6i9Pd-NKo0Ij6ymZ_LvBmsR_Qgr8',
  authDomain: 'demospaapp.firebaseapp.com',
  databaseURL: 'https://demospaapp.firebaseio.com',
  projectId: 'demospaapp',
  storageBucket: 'demospaapp.appspot.com',
  messagingSenderId: '819888191756'
};
@NgModule({
  declarations: [AppComponent, LoginComponent, EmailComponent, SignupComponent, MembersComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routers,
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
