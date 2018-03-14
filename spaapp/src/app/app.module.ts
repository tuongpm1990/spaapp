import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { DevExtremeModule } from 'devextreme-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextBoxModule,
  DxDateBoxModule,
  DxButtonModule,
  DxValidatorModule,
  DxValidationSummaryModule} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'members', component: MembersComponent },
  { path: 'login-email', component: EmailComponent },
];
// export const routers: ModuleWithProviders = RouterModule.forRoot(router);


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
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    HttpModule,
    AngularFireAuthModule,
    DxButtonModule,
    DevExtremeModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
