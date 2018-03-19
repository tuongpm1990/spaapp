import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
// import { AuthGuard } from './auth.guard';
// import { routers } from './app.routers';
import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ScheduleService } from './services/schedule.service';
import {DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextBoxModule,
  DxDateBoxModule,
  DxButtonModule,
  DxValidatorModule,
  DxValidationSummaryModule} from 'devextreme-angular';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AuthguardGuard} from './authguard.guard';
const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [ AuthguardGuard ]},
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
  declarations: [AppComponent, LoginComponent, EmailComponent, SignupComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    DxButtonModule,
    DevExtremeModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxSchedulerModule,
    DxTemplateModule,
    // routers
  ],
  providers: [AuthguardGuard, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
