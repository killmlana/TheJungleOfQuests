import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BackgroundComponent} from './shared/background/background.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/AuthInterceptor';
import {BrowserModule} from '@angular/platform-browser';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundComponent, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }, AuthService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JungleOfQuests';
}
