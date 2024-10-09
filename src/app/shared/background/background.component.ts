import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavigationComponent} from '../../components/navigation/navigation.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    NgIf
  ],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
  constructor(public router: Router) {

  }
}
