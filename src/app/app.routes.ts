import { Routes } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {SignInComponent} from './components/auth/sign-in/sign-in.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component: LandingComponent},
  {path : 'sign-in', component: SignInComponent},
];
