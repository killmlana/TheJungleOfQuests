import { Component } from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';
import {BackgroundComponent} from '../../shared/background/background.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavigationComponent,
    BackgroundComponent,
    RouterLink
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
