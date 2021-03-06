import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import { AuthguardGuard } from './authguard.guard';

const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthguardGuard]},
  { path: 'login-email', component: EmailComponent },
  { path: 'dashboard', component: DashboardComponent }
];
export const routers: ModuleWithProviders = RouterModule.forRoot(router);
