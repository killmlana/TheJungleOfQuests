import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component: LandingComponent},
];
