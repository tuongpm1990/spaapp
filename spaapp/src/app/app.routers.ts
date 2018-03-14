import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { AuthGuard } from './auth.service';

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard]},
  { path: 'login-email', component: EmailComponent },
];

export const routers: ModuleWithProviders = RouterModule.forRoot(router);
